import React, { useEffect, useMemo, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type Course = {
    title: string;
    duration?: string;
    hours?: string;
    link: string;
};

type CarouselProps = {
    items: Course[];
    loop?: boolean;
    autoplay?: boolean;
    interval?: number;
    className?: string;
    cardsPerView?: number;
    type?: 'course' | 'category';
};

export const CourseCarousel: React.FC<CarouselProps> = ({
    items,
    loop = true,
    autoplay = true,
    interval = 4000,
    className = '',
    cardsPerView = 4,
    type = 'course'
}) => {
    // Mobile responsive cardsPerView
    // We'll rely on CSS grid in the slide for responsiveness, 
    // but for the grouping logic we need to decide how many items are in a "slide" (group).
    // If we want a true carousel where items scroll one by one, we shouldn't use the grouping logic from GroupedCarousel.
    // Instead, we should let Embla handle it and style slides with flex-basis.
    // However, GroupedCarousel uses grouping. Let's try the flex-basis approach for smoother one-by-one scrolling if possible, 
    // OR just stick to grouping if that's the project pattern. 
    // The user said "carousel manner", usually implies smooth scrolling or paging.
    // Let's use the grouping pattern to be consistent with GroupedCarousel for now, 
    // but maybe adapted. 

    // Actually, standard Embla usage is better for responsive carousels where you want 1 item on mobile, 2 on tablet, 4 on desktop without fixed groupings.

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 1 } // Scroll 1 by 1 or page by page?
        }
    });

    // We will NOT group slides manually. We will let Embla handle items.

    // Auto-play logic
    const autoplayRef = useRef<number | null>(null);

    const startAutoplay = () => {
        if (!autoplay) return;
        stopAutoplay();
        autoplayRef.current = window.setInterval(() => {
            if (emblaApi) emblaApi.scrollNext();
        }, interval);
    };

    const stopAutoplay = () => {
        if (autoplayRef.current) {
            window.clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    };

    useEffect(() => {
        if (!emblaApi) return;
        startAutoplay();
        emblaApi.on('select', startAutoplay); // Reset timer on interaction
        emblaApi.on('pointerDown', stopAutoplay);

        return () => stopAutoplay();
    }, [emblaApi, autoplay, interval]);


    // Navigation
    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => {
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        };
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className={`relative group ${className}`}>
            <div className="overflow-hidden p-2 -m-2" ref={emblaRef}>
                <div className="flex touch-pan-y ml-[calc(1rem*-1)]">
                    {/* ml negative margin to offset left padding of slides */}

                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pl-4"
                        // 100% on mobile, 50% on tablet, 25% on desktop (4 items)
                        >
                            {type === 'course' ? (
                                <div className="bg-white border rounded-xl overflow-hidden group/card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                                    <div className="h-32 bg-gray-100 flex items-center justify-center relative overflow-hidden group-hover/card:bg-primary/5 transition-colors">
                                        <span className="text-gray-800 font-bold text-lg px-4 text-center group-hover/card:text-primary">{item.title}</span>
                                    </div>
                                    <div className="p-5 border-t">
                                        <p className="text-gray-500 text-sm mb-3 flex items-center gap-2">
                                            {/* Use Clock for duration if present, or just a dot for other types if needed */}
                                            {item.duration ? <Clock className="w-4 h-4 text-secondary" /> : <span className="w-2 h-2 rounded-full bg-secondary"></span>}
                                            {item.duration || item.hours}
                                        </p>
                                        <Link to={item.link} className="text-primary font-bold text-sm hover:text-secondary flex items-center gap-1">
                                            Read More <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                // Category card style (from lines 209-224 of Home.tsx)
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden group/card hover:-translate-y-2 transition-transform duration-300 h-full">
                                    <div className="h-40 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 opacity-80"></div>
                                        <span className="relative text-white font-bold text-xl px-4 text-center">{item.title}</span>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                            {item.hours || item.duration}
                                        </p>
                                        <Link to={item.link} className="text-primary font-bold hover:text-secondary flex items-center gap-2 group-hover/card:gap-4 transition-all">
                                            Read More <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons - Visible on Desktop or when needed */}
            <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden md:flex rounded-full bg-white shadow-md border-gray-200 hover:bg-gray-100 hover:text-primary disabled:opacity-0"
                onClick={scrollPrev}
                disabled={!canScrollPrev && !loop}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hidden md:flex rounded-full bg-white shadow-md border-gray-200 hover:bg-gray-100 hover:text-primary disabled:opacity-0"
                onClick={scrollNext}
                disabled={!canScrollNext && !loop}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>

        </div>
    );
};

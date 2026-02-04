import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GTMPageView from "./GTMPageView";
import { Helmet } from 'react-helmet-async';
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { TopBar } from "./components/TopBar"; // New Import
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import WhyChooseUs from "./pages/WhyChooseUs";
import Mentors from "./pages/Mentors";
import { categories } from './data';

// New Pages
import AllCourses from "./pages/AllCourses";
import SasTraining from "./pages/SasTraining";
import SapFicoPage from "./pages/SapFicoPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen text-black bg-white">
        <Helmet>
          <title>Aspire Techsoft - Best IT Training & Placement Institute in Pune</title>
          <meta name="description" content="Join Our 100% Job Guarantee Courses. Aspire Techsoft offers best IT training in Pune." />
          <meta name="keywords" content={categories.map(c => c.name).join(', ')} />
        </Helmet>

        <Toaster />
        <Sonner />
        <Preloader />
        <BrowserRouter>
          <GTMPageView />
          <ScrollToTop />
          <TopBar />
          <Navbar />
          <main>
            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="courses" element={<Courses />} />
              <Route path="all-courses.php" element={<AllCourses />} />
              <Route path="courses-menu" element={<AllCourses />} />
              <Route path="sas-training-institute-in-pune" element={<SasTraining />} />
              <Route path="sap-fico-on-s4-hana" element={<SapFicoPage />} />
              <Route path="courses/:id" element={<CourseDetail />} />
              <Route path="mentors" element={<Mentors />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="why-choose-us" element={<WhyChooseUs />} />
              {/* Keep other routes if needed for backward compatibility or remove them */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

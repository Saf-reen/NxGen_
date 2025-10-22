import { useEffect, useState } from "react";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        {/* Animated Book Stack */}
        <div className="relative w-32 h-32 mx-auto">
          {/* Book 1 */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-primary rounded-sm"
            style={{
              animation: "bookDrop1 1.5s ease-in-out infinite",
            }}
          />
          {/* Book 2 */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-accent rounded-sm"
            style={{
              animation: "bookDrop2 1.5s ease-in-out infinite 0.3s",
            }}
          />
          {/* Book 3 */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-primary/70 rounded-sm"
            style={{
              animation: "bookDrop3 1.5s ease-in-out infinite 0.6s",
            }}
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold gradient-text">Loading Academy</h2>
          <div className="flex gap-1 justify-center">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bookDrop1 {
          0%, 100% {
            transform: translate(-50%, 0);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -60px);
            opacity: 0.7;
          }
        }

        @keyframes bookDrop2 {
          0%, 100% {
            transform: translate(-50%, 0);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -40px);
            opacity: 0.8;
          }
        }

        @keyframes bookDrop3 {
          0%, 100% {
            transform: translate(-50%, 0);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -20px);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};

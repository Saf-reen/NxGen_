import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Notes from "./pages/Notes";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import WhyChooseUs from "./pages/WhyChooseUs";
import Mentors from "./pages/Mentors";
import { categories } from './data';
import TrainingPage from './pages/training/index';
import ClassroomTraining from './pages/training/ClassroomTraining';
import OnlineTraining from './pages/training/OnlineTraining';
import WeekendTraining from './pages/training/WeekendTraining';
import CorporateTraining from './pages/training/CorporateTraining';
import Internships from './pages/training/Internships';
import TrainersProfile from './pages/training/TrainersProfile';
import CourseSchedule from './pages/training/CourseSchedule';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen  text-black">
        <Helmet>
          <title>NxGen Tech Academy - Training & Courses</title>
          <meta name="description" content="NxGen Tech Academy - Industry-aligned training in Full Stack, Python, Data Science, Power BI, Testing, and Cybersecurity." />
          <meta name="keywords" content={categories.map(c => c.name).join(', ')} />
        </Helmet>
        <Toaster />
        <Sonner />
        <Preloader />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="courses" element={<Courses />} />
              <Route path="courses/:id" element={<CourseDetail />} />
              <Route path="notes" element={<Notes />} />
              <Route path="mentors" element={<Mentors />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="why-choose-us" element={<WhyChooseUs />} />
              <Route path="training/classroom" element={<ClassroomTraining />} />
              <Route path="training/online" element={<OnlineTraining />} />
              <Route path="training" element={<TrainingPage />} />
              <Route path="training/weekend" element={<WeekendTraining />} />
              <Route path="training/corporate" element={<CorporateTraining />} />
              <Route path="training/internships" element={<Internships />} />
              <Route path="training/trainers" element={<TrainersProfile />} />
              <Route path="training/schedule" element={<CourseSchedule />} />
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

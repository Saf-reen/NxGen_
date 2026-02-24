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
import DataAnalyticsCourse from "./pages/DataAnalyticsCourse";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import WhyChooseUs from "./pages/WhyChooseUs";
import Mentors from "./pages/Mentors";
import { categories } from './data';

// New Pages
import AllCourses from "./pages/AllCourses";
import Blogs from "./pages/Blogs";
import SAPCourse from "./pages/SAPCourse";
import PythonCourse from "./pages/PythonCourse";
import AIMLCourse from "./pages/AIMLCourse";
import AICourse from "./pages/AICourse";
import Register from "./pages/Auth/Register";
import StudentLogin from "./pages/Auth/StudentLogin";
import InstructorLogin from "./pages/Auth/InstructorLogin";
import Dashboard from "./pages/Dashboard/Dashboard";
import CourseViewer from "./pages/Dashboard/CourseViewer";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const authPages = ["/register", "/student-login", "/instructor-login"];
  const isAuthPage = authPages.includes(location.pathname);

  const role = localStorage.getItem("role");
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isStudentOrInstructorLoggedIn = !!role && (role === "student" || role === "instructor");

  // Hide TopBar and Footer for auth pages OR when a student/instructor is logged in and on a dashboard/auth page
  const hideComponents = isAuthPage || isStudentOrInstructorLoggedIn;

  return (
    <>
      <GTMPageView />
      <ScrollToTop />
      {!hideComponents && <TopBar />}
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="courses-menu" element={<AllCourses />} />
          <Route path="courses/sap-technical" element={<SAPCourse categorySlug="sap-technical" />} />
          <Route path="courses/sap-specialized" element={<SAPCourse categorySlug="sap-specialized" />} />
          <Route path="courses/sap-functional" element={<SAPCourse categorySlug="sap-functional" />} />
          <Route path="courses/sap-admin" element={<SAPCourse categorySlug="sap-admin" />} />
          <Route path="courses/python" element={<PythonCourse />} />
          <Route path="courses/ai" element={<AICourse />} />
          <Route path="courses/aiml" element={<AIMLCourse />} />
          <Route path="courses/power-bi" element={<SAPCourse categorySlug="power-bi" />} />
          <Route path="courses/digital-marketing" element={<SAPCourse categorySlug="digital-marketing" />} />
          <Route path="courses/sap-btp" element={<SAPCourse categorySlug="sap-btp" />} />
          <Route path="courses/:id" element={<DataAnalyticsCourse />} />
          <Route path="mentors" element={<Mentors />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="why-choose-us" element={<WhyChooseUs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="register" element={<Register />} />
          <Route path="student-login" element={<StudentLogin />} />
          <Route path="instructor-login" element={<InstructorLogin />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/course/:id" element={<CourseViewer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hideComponents && <Footer />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen text-black bg-white">
        <Helmet>
          <title>NxGen Tech Academy - Best IT Training & Placement Institute in Pune</title>
          <meta name="description" content="Join Our 100% Job Guarantee Courses. NxGen Tech Academy offers best IT training in Pune." />
          <meta name="keywords" content={categories.map(c => c.name).join(', ')} />
        </Helmet>

        <Toaster />
        <Sonner />
        <Preloader />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

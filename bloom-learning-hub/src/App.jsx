import { Toaster } from "@/components/ui/toaster"
import './App.css'; 
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "@/contexts/AuthContext"
import Index from "./pages/Index"
import Dashboard from "./pages/admin/Dashboard"
import Courses from "./pages/admin/Courses"
import Students from "./pages/admin/Students"
import NotFound from "./pages/NotFound"
import StudentDashboard from "./pages/student/StudentDashboard"
import StudentMyCourse from "./pages/student/StudentMyCourse"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/student/my-course" element={<StudentMyCourse />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/courses" element={<Courses />} />
            <Route path="/admin/students" element={<Students />} />
            <Route path="/admin/reports" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
)

export default App
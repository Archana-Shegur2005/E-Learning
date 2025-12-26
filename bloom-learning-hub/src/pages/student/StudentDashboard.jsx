import React, { useState } from "react"
import Sidebar from "@/components/Sidebar"
import { useAuth } from "@/contexts/AuthContext"
import { courses, students } from "@/data/mockData"
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Play,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import CourseSlider from "@/components/CourseSlider"

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user } = useAuth()

  // Get student's enrolled course
  const studentData = students.find(s => s.id === "student-1") || students[0]
  const enrolledCourse = courses.find(c => c.id === studentData.courseId)

  const stats = [
    {
      icon: BookOpen,
      label: "Enrolled Course",
      value: "1",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Clock,
      label: "Hours Studied",
      value: "24",
      color: "text-accent",
      bg: "bg-accent/10"
    },
    {
      icon: Award,
      label: "Certificates",
      value: "0",
      color: "text-success",
      bg: "bg-success/10"
    },
    {
      icon: TrendingUp,
      label: "Progress",
      value: `${studentData.progress}%`,
      color: "text-warning",
      bg: "bg-warning/10"
    }
  ]

  const courseLessons = [
    { title: "Introduction to React", duration: "45 min", completed: true },
    { title: "Components & Props", duration: "1 hr", completed: true },
    { title: "State Management", duration: "1.5 hr", completed: true },
    { title: "Hooks Deep Dive", duration: "2 hr", completed: false },
    { title: "Context API", duration: "1 hr", completed: false },
    { title: "Final Project", duration: "3 hr", completed: false }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="pt-16 lg:pl-64">
        <div className="p-6 lg:p-8">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              Welcome back,{" "}
              <span className="gradient-text">{user?.name || "Student"}</span>
            </h1>
            <p className="text-muted-foreground">
              Continue your learning journey
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-5 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-4`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <p className="text-2xl font-heading font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Current Course */}
          {enrolledCourse && (
            <div className="bg-card rounded-2xl border border-border overflow-hidden animate-fade-in animation-delay-200">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <img
                    src={enrolledCourse.image}
                    alt={enrolledCourse.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                    <span className="text-xs font-medium bg-primary/80 px-2 py-1 rounded-full">
                      {enrolledCourse.category}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground font-medium mb-1">
                        {enrolledCourse.code}
                      </p>
                      <h2 className="text-xl font-heading font-bold mb-2">
                        {enrolledCourse.name}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {enrolledCourse.instructor}
                      </p>
                    </div>
                    <Button variant="hero">
                      <Play size={16} className="mr-2" />
                      Continue
                    </Button>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">
                        Course Progress
                      </span>
                      <span className="font-medium">
                        {studentData.progress}%
                      </span>
                    </div>
                    <Progress value={studentData.progress} className="h-2" />
                  </div>

                  {/* Lessons */}
                  <div className="space-y-2">
                    {courseLessons.map((lesson, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                          lesson.completed
                            ? "bg-success/10"
                            : "hover:bg-secondary/50"
                        }`}
                      >
                        {lesson.completed ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-border" />
                        )}
                        <span
                          className={`flex-1 text-sm ${
                            lesson.completed
                              ? "line-through text-muted-foreground"
                              : ""
                          }`}
                        >
                          {lesson.title}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {lesson.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Available Courses */}
          <div className="mt-8">
            <h2 className="text-xl font-heading font-bold mb-4">
              Explore More Courses
            </h2>

            <CourseSlider />
          </div>
        </div>
      </main>
    </div>
  )
}

export default StudentDashboard

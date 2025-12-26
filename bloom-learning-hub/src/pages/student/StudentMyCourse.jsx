import React, { useState } from "react"
import Sidebar from "@/components/Sidebar"
import { students } from "@/data/mockData"
import {
  Clock,
  Play,
  CheckCircle,
  BookOpen,
  Award,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import courseWebDev from "@/assets/course-web-dev.jpg"
const StudentMyCourse = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const enrolledCourse = {
    id: 1,
    title: "Full-Stack Web Development",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    progress: 68,
    image: courseWebDev,
    modules: [
      {
        id: 1,
        title: "Introduction to Web Development",
        completed: true,
        duration: "2h 30m"
      },
      {
        id: 2,
        title: "HTML & CSS Fundamentals",
        completed: true,
        duration: "4h 15m"
      },
      {
        id: 3,
        title: "JavaScript Basics",
        completed: true,
        duration: "5h 45m"
      },
      {
        id: 4,
        title: "React Framework",
        completed: false,
        duration: "8h 20m",
        inProgress: true
      },
      {
        id: 5,
        title: "Backend Development with Node.js",
        completed: false,
        duration: "7h 10m"
      },
      {
        id: 6,
        title: "Database & Deployment",
        completed: false,
        duration: "6h 30m"
      }
    ]
  }
  // Get student's enrolled course
  const studentData = students.find(s => s.id === "student-1") || students[0]

  const courseLessons = [
    {
      id: 1,
      title: "Introduction to React",
      duration: "45 min",
      completed: true,
      description:
        "Learn the basics of React and set up your development environment."
    },
    {
      id: 2,
      title: "Components & Props",
      duration: "1 hr",
      completed: true,
      description:
        "Understand React components and how to pass data with props."
    },
    {
      id: 3,
      title: "State Management",
      duration: "1.5 hr",
      completed: true,
      description: "Master state management in React applications."
    },
    {
      id: 4,
      title: "Hooks Deep Dive",
      duration: "2 hr",
      completed: false,
      description: "Explore all React hooks and their use cases."
    },
    {
      id: 5,
      title: "Context API",
      duration: "1 hr",
      completed: false,
      description: "Learn how to manage global state with Context API."
    },
    {
      id: 6,
      title: "Final Project",
      duration: "3 hr",
      completed: false,
      description: "Build a complete React application from scratch."
    }
  ]

  const completedLessons = courseLessons.filter(l => l.completed).length
  const totalLessons = courseLessons.length
  const progressPercentage = (completedLessons / totalLessons) * 100

  if (!enrolledCourse) {
    return (
      <div className="min-h-screen bg-background">
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <main className="pt-16 lg:pl-64 p-8">
          <p className="text-muted-foreground">No course enrolled.</p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className=" lg:pl-64">
        <div className="p-6 lg:p-8">
          {/* Course Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold mb-2">
              My <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-muted-foreground">
              Continue learning and track your progress
            </p>
          </div>

          {/* Course Card */}
          <div className="glass-card rounded-2xl overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/3 h-64 md:h-auto relative">
                <img
                  src={enrolledCourse.image}
                  alt={enrolledCourse.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent md:hidden" />
              </div>
              <div className="flex-1 p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-2">
                      {enrolledCourse.title}
                    </h2>
                    <p className="text-muted-foreground">
                      By {enrolledCourse.instructor}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    In Progress
                  </span>
                </div>

                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={18} />
                    <span>{enrolledCourse.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen size={18} />
                    <span>{enrolledCourse.modules.length} Modules</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award size={18} />
                    <span>Certificate Included</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Course Progress</span>
                    <span className="text-sm font-bold gradient-text">
                      {enrolledCourse.progress}%
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full gradient-bg transition-all duration-500"
                      style={{ width: `${enrolledCourse.progress}%` }}
                    />
                  </div>
                </div>

                <Button variant="gradient" size="lg">
                  <Play size={18} />
                  Continue Learning
                  <ChevronRight size={18} />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Course Content */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-heading font-bold">Course Content</h2>

              {courseLessons.map(lesson => (
                <div
                  key={lesson.id}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    lesson.completed
                      ? "bg-success/5 border-success/30"
                      : "bg-card border-border hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        lesson.completed
                          ? "bg-success text-success-foreground"
                          : "bg-secondary"
                      }`}
                    >
                      {lesson.completed ? (
                        <CheckCircle size={20} />
                      ) : (
                        <span className="font-medium">{lesson.id}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-medium ${
                            lesson.completed ? "text-muted-foreground" : ""
                          }`}
                        >
                          {lesson.title}
                        </h3>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock size={12} />
                          {lesson.duration}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {lesson.description}
                      </p>
                    </div>
                    {!lesson.completed && (
                      <Button variant="hero" size="sm">
                        <Play size={14} className="mr-2" />
                        Start
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Card */}
            <div className="space-y-4">
              <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
                <h3 className="font-heading font-semibold mb-4">
                  Your Progress
                </h3>

                <div className="text-center mb-6">
                  <div className="relative inline-flex items-center justify-center w-32 h-32">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        className="stroke-secondary fill-none"
                        strokeWidth="12"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        className="stroke-primary fill-none"
                        strokeWidth="12"
                        strokeDasharray={`${(progressPercentage / 100) *
                          352} 352`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-2xl font-heading font-bold">
                      {Math.round(progressPercentage)}%
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span className="text-sm">Lessons</span>
                    </div>
                    <span className="font-medium">
                      {completedLessons}/{totalLessons}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent" />
                      <span className="text-sm">Duration</span>
                    </div>
                    <span className="font-medium">
                      {enrolledCourse.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-warning" />
                      <span className="text-sm">Certificate</span>
                    </div>
                    <span
                      className={`font-medium ${
                        progressPercentage === 100
                          ? "text-success"
                          : "text-muted-foreground"
                      }`}
                    >
                      {progressPercentage === 100 ? "Ready" : "Pending"}
                    </span>
                  </div>
                </div>

                <Button variant="hero" className="w-full mt-6">
                  <Play size={16} className="mr-2" />
                  Continue Learning
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default StudentMyCourse

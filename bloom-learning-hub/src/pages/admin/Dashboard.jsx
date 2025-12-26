import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import { useAuth } from "@/contexts/AuthContext"
import {
  BookOpen,
  Users,
  TrendingUp,
  Clock,
  Star,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import CourseSlider from "@/components/CourseSlider"

const stats = [
  {
    icon: BookOpen,
    label: "Total Courses",
    value: "12",
    change: "+2 this month"
  },
  {
    icon: Users,
    label: "Active Students",
    value: "2,450",
    change: "+180 this week"
  },
  {
    icon: TrendingUp,
    label: "Completion Rate",
    value: "94%",
    change: "+5% vs last month"
  },
  {
    icon: Clock,
    label: "Hours Watched",
    value: "8,420",
    change: "+1,200 this week"
  }
]

const recentActivities = [
  {
    id: 1,
    type: "enrollment",
    user: "John Doe",
    course: "Web Development",
    time: "2 hours ago"
  },
  {
    id: 2,
    type: "completion",
    user: "Jane Smith",
    course: "Data Science",
    time: "4 hours ago"
  },
  {
    id: 3,
    type: "enrollment",
    user: "Mike Johnson",
    course: "UI/UX Design",
    time: "6 hours ago"
  },
  {
    id: 4,
    type: "review",
    user: "Sarah Wilson",
    course: "Mobile Apps",
    time: "8 hours ago",
    rating: 5
  }
]

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user } = useAuth()
  const isAdmin = user?.role === "admin"

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="lg:pl-64">
        <div className="container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold mb-2">
              Welcome back, <span className="gradient-text">{user?.name}</span>!
            </h1>
            <p className="text-muted-foreground">
              {isAdmin
                ? "Here's what's happening with your platform today."
                : "Continue your learning journey where you left off."}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 hover-lift"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-3xl font-display font-bold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              )
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2 glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-bold">
                  Recent Activity
                </h2>
                <Button variant="ghost" size="sm">
                  View All <ChevronRight size={16} />
                </Button>
              </div>
              <div className="space-y-4">
                {recentActivities.map(activity => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold">
                      {activity.user.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">
                        <span className="text-primary">{activity.user}</span>{" "}
                        {activity.type === "enrollment" && "enrolled in"}
                        {activity.type === "completion" && "completed"}
                        {activity.type === "review" && "reviewed"}{" "}
                        <span className="font-semibold">{activity.course}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                    {activity.rating && (
                      <div className="flex items-center gap-1 text-accent">
                        <Star size={16} fill="currentColor" />
                        <span className="font-medium">{activity.rating}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-display font-bold mb-6">
                Quick Actions
              </h2>
              <div className="space-y-3">
                {isAdmin ? (
                  <>
                    <Button variant="gradient" className="w-full justify-start">
                      <BookOpen size={18} />
                      Add New Course
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users size={18} />
                      Manage Students
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp size={18} />
                      View Analytics
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="gradient" className="w-full justify-start">
                      <BookOpen size={18} />
                      Continue Learning
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Star size={18} />
                      View Certificates
                    </Button>
                  </>
                )}
              </div>

              {/* Progress Card */}
              {!isAdmin && (
                <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-sm font-medium mb-2">Current Progress</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 rounded-full bg-secondary">
                      <div className="w-[68%] h-full rounded-full gradient-bg" />
                    </div>
                    <span className="text-sm font-bold gradient-text">68%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Web Development Course
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Course Slider */}
          <CourseSlider
            title={isAdmin ? "Platform Courses" : "Recommended for You"}
            subtitle={
              isAdmin
                ? "Manage and update your course catalog"
                : "Based on your learning history"
            }
          />
        </div>
      </main>
    </div>
  )
}

export default Dashboard

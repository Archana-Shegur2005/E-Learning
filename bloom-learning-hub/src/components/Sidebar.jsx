import { useState } from "react"
import {
  Home,
  BookOpen,
  Users,
  BarChart3,
  LogIn,
  UserPlus,
  GraduationCap,
  Menu,
  X,
  LogOut,
  LayoutDashboard
} from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import LoginModal from "@/components/auth/LoginModal"

const Sidebar = ({ isOpen, onToggle }) => {
  const { user, isAuthenticated, logout } = useAuth()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Updated paths to match your second sidebar example
  const adminLinks = [
    { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/admin/courses", icon: BookOpen, label: "Courses" },
    { to: "/admin/students", icon: Users, label: "Students" },
    { to: "/admin/reports", icon: BarChart3, label: "Reports" }
  ]

  const studentLinks = [
    { to: "/student", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/student/my-course", icon: GraduationCap, label: "My Course" }
  ]

  const guestLinks = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/courses", icon: BookOpen, label: "Courses" },
    { to: "/about", icon: GraduationCap, label: "About" }
  ]

  const links = !isAuthenticated
    ? guestLinks
    : user?.role === "admin"
    ? adminLinks
    : studentLinks

  const handleLoginClick = e => {
    e.preventDefault()
    setIsLoginModalOpen(true)
    if (isOpen) onToggle()
  }

  const handleLogout = () => {
    logout()
    navigate("/")
    if (isOpen) onToggle()
  }

  const handleLinkClick = () => {
    if (isOpen) onToggle()
  }

  // Check if path is active (supports partial matches for nested routes)
  const isActive = path => {
    return location.pathname.startsWith(path)
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border z-50 transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header section with logo and close button */}
          <div className="p-4 border-b border-border flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={handleLinkClick}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">
                <span className="gradient-text">Learn</span>Hub
              </span>
            </Link>

            {/* Close button for mobile */}
            <button
              onClick={onToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 flex flex-col p-4 overflow-y-auto">
            {/* User info */}
            {isAuthenticated && user && (
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary">
                      {user.name?.charAt(0) || "U"}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{user.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">
                      {user.role}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <nav className="flex-1 space-y-1">
              {links.map(link => {
                const Icon = link.icon
                const active = isActive(link.to)

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={handleLinkClick}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                      active
                        ? "gradient-bg text-primary-foreground shadow-lg"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Auth Buttons / Logout */}
            <div className="mt-auto pt-4 border-t border-border space-y-2">
              {isAuthenticated && user ? (
                <>
                  {/* Simple logout button for mobile */}
                  <button
                    onClick={handleLogout}
                    className=" flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200 w-full"
                  >
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3"
                    onClick={handleLoginClick}
                  >
                    <LogIn size={20} />
                    Sign In
                  </Button>
                  <Button
                    variant="gradient"
                    className="w-full justify-start gap-3"
                    onClick={handleLoginClick}
                  >
                    <UserPlus size={20} />
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Toggle Button - Fixed position */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 lg:hidden p-3 rounded-xl bg-card shadow-lg border border-border"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  )
}

export default Sidebar

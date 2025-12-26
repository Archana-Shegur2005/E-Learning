import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/contexts/AuthContext"
import {
  GraduationCap,
  Shield,
  User,
  Eye,
  EyeOff,
  ArrowRight
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [selectedRole, setSelectedRole] = useState("student")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleSubmit = async e => {
    e.preventDefault()
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      await login(email, password, selectedRole)
      toast({
        title: "Welcome back!",
        description: `Logged in as ${selectedRole}`
      })
      onClose()

      // FIXED: Redirect to correct route based on role
      const redirectPath = selectedRole === "admin" ? "/admin" : "/student"
      navigate(redirectPath)
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid credentials",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Side - Branding (Hidden on mobile) */}
          <div className="hidden lg:flex lg:w-1/2 gradient-hero items-center justify-center p-12">
            <div className="max-w-md text-center text-primary-foreground">
              <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-8">
                <GraduationCap className="w-12 h-12" />
              </div>
              <h1 className="text-4xl font-display font-bold mb-4">
                Welcome to LearnHub
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Your gateway to world-class online education
              </p>
              <div className="flex justify-center gap-8">
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm text-primary-foreground/70">Courses</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">50K+</p>
                  <p className="text-sm text-primary-foreground/70">Students</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">100+</p>
                  <p className="text-sm text-primary-foreground/70">
                    Instructors
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
            <div className="w-full max-w-md">
              {/* Mobile Logo (Hidden on desktop) */}
              <div className="lg:hidden text-center mb-8">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-10 h-10 text-primary-foreground" />
                </div>
                <h1 className="text-2xl font-display font-bold">LearnHub</h1>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold mb-2">
                  Sign In
                </h2>
                <p className="text-muted-foreground">
                  Enter your credentials to access your account
                </p>
              </div>

              {/* Role Selector */}
              <div className="mb-8">
                <Label className="text-sm font-medium mb-3 block">
                  Select Role
                </Label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedRole("student")}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                      selectedRole === "student"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedRole === "student"
                          ? "gradient-bg text-primary-foreground"
                          : "bg-secondary"
                      }`}
                    >
                      <User size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">Student</p>
                      <p className="text-xs text-muted-foreground">
                        View courses
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedRole("admin")}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                      selectedRole === "admin"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedRole === "admin"
                          ? "gradient-bg text-primary-foreground"
                          : "bg-secondary"
                      }`}
                    >
                      <Shield size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">Admin</p>
                      <p className="text-xs text-muted-foreground">
                        Manage all
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="mt-2 h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-2">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      className="h-12 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-muted-foreground">
                      Remember me
                    </span>
                  </label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="xl"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      Sign In
                      <ArrowRight size={20} />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-center mt-8 text-muted-foreground">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  Sign up for free
                </a>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal

import React, { createContext, useContext, useState } from "react"

const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user")
    return stored ? JSON.parse(stored) : null
  })

  const login = async (email, password, role) => {
    // Simulated login - in production, this would call an API
    const mockUser = {
      id: role === "admin" ? "admin-1" : "student-1",
      name: role === "admin" ? "Admin User" : "John Student",
      email,
      role,
      courseId: role === "student" ? "course-1" : undefined
    }

    setUser(mockUser)
    localStorage.setItem("user", JSON.stringify(mockUser))
    localStorage.setItem("role", role || "")
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    localStorage.removeItem("role")
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import {
  Search,
  Filter,
  Mail,
  MoreVertical,
  BookOpen,
  GraduationCap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const students = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    course: "Web Development",
    progress: 78,
    enrolled: "Jan 15, 2024",
    avatar: "JD"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    course: "Data Science",
    progress: 92,
    enrolled: "Dec 10, 2023",
    avatar: "JS"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    course: "UI/UX Design",
    progress: 45,
    enrolled: "Feb 20, 2024",
    avatar: "MJ"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    course: "Mobile Apps",
    progress: 100,
    enrolled: "Nov 5, 2023",
    avatar: "SW"
  },
  {
    id: 5,
    name: "David Kim",
    email: "david@example.com",
    course: "Web Development",
    progress: 65,
    enrolled: "Mar 1, 2024",
    avatar: "DK"
  },
  {
    id: 6,
    name: "Emily Chen",
    email: "emily@example.com",
    course: "Data Science",
    progress: 30,
    enrolled: "Mar 15, 2024",
    avatar: "EC"
  }
]

const Students = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredStudents = students.filter(
    student =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.course.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="lg:pl-64">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold mb-2">
                <span className="gradient-text">Students</span>
              </h1>
              <p className="text-muted-foreground">
                Manage and view all enrolled students
              </p>
            </div>
            <Button variant="gradient">
              <GraduationCap size={18} />
              Add Student
            </Button>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <Input
                placeholder="Search students..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
            <Button variant="outline" className="h-12">
              <Filter size={18} />
              Filters
            </Button>
          </div>

          {/* Students Table */}
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-muted-foreground">
                      Student
                    </th>
                    <th className="text-left p-4 font-semibold text-muted-foreground">
                      Course
                    </th>
                    <th className="text-left p-4 font-semibold text-muted-foreground">
                      Progress
                    </th>
                    <th className="text-left p-4 font-semibold text-muted-foreground">
                      Enrolled
                    </th>
                    <th className="text-right p-4 font-semibold text-muted-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map(student => (
                    <tr
                      key={student.id}
                      className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold">
                            {student.avatar}
                          </div>
                          <div>
                            <p className="font-medium">{student.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {student.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <BookOpen size={16} className="text-primary" />
                          <span>{student.course}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-2 rounded-full bg-secondary">
                            <div
                              className={`h-full rounded-full ${
                                student.progress === 100
                                  ? "bg-green-500"
                                  : "gradient-bg"
                              }`}
                              style={{ width: `${student.progress}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">
                            {student.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {student.enrolled}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Mail size={18} />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreVertical size={18} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredStudents.length === 0 && (
              <div className="text-center py-16">
                <GraduationCap className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No students found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Students

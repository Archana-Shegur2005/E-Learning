import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import { Search, Filter, Clock, Users, Star, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import courseWebDev from "@/assets/course-web-dev.jpg"
import courseDataScience from "@/assets/course-data-science.jpg"
import courseDesign from "@/assets/course-design.jpg"
import courseMobile from "@/assets/course-mobile.jpg"

const categories = [
  "All",
  "Development",
  "Data Science",
  "Design",
  "Business",
  "Marketing"
]

const allCourses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    students: 2450,
    rating: 4.9,
    price: 99,
    image: courseWebDev,
    category: "Development"
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    instructor: "Michael Chen",
    duration: "16 weeks",
    students: 1890,
    rating: 4.8,
    price: 129,
    image: courseDataScience,
    category: "Data Science"
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    instructor: "Emily Davis",
    duration: "8 weeks",
    students: 3200,
    rating: 4.9,
    price: 79,
    image: courseDesign,
    category: "Design"
  },
  {
    id: 4,
    title: "Mobile App Development",
    instructor: "Alex Rivera",
    duration: "10 weeks",
    students: 1560,
    rating: 4.7,
    price: 89,
    image: courseMobile,
    category: "Development"
  },
  {
    id: 5,
    title: "Python for Beginners",
    instructor: "David Kim",
    duration: "6 weeks",
    students: 4200,
    rating: 4.8,
    price: 49,
    image: courseWebDev,
    category: "Development"
  },
  {
    id: 6,
    title: "Advanced Data Analytics",
    instructor: "Lisa Wang",
    duration: "12 weeks",
    students: 980,
    rating: 4.6,
    price: 149,
    image: courseDataScience,
    category: "Data Science"
  },
  {
    id: 7,
    title: "Brand Identity Design",
    instructor: "Mark Thompson",
    duration: "4 weeks",
    students: 1200,
    rating: 4.7,
    price: 59,
    image: courseDesign,
    category: "Design"
  },
  {
    id: 8,
    title: "React Native Essentials",
    instructor: "Chris Lee",
    duration: "8 weeks",
    students: 2100,
    rating: 4.8,
    price: 79,
    image: courseMobile,
    category: "Development"
  }
]

const Courses = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCourses = allCourses.filter(course => {
    const matchesCategory =
      activeCategory === "All" || course.category === activeCategory
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="lg:pl-64">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold mb-2">
              Explore <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-muted-foreground">
              Discover courses taught by industry experts
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <Input
                placeholder="Search courses..."
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

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "gradient-bg text-primary-foreground shadow-soft"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map(course => (
              <div
                key={course.id}
                className="glass-card rounded-2xl overflow-hidden hover-lift group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    By {course.instructor}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1 text-accent">
                      <Star size={14} fill="currentColor" />
                      {course.rating}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold gradient-text">
                      ${course.price}
                    </span>
                    <Button variant="gradient" size="sm">
                      <BookOpen size={16} />
                      Enroll
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Courses

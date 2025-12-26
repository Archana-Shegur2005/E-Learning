import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Clock, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import courseWebDev from "@/assets/course-web-dev.jpg"
import courseDataScience from "@/assets/course-data-science.jpg"
import courseDesign from "@/assets/course-design.jpg"
import courseMobile from "@/assets/course-mobile.jpg"

const courses = [
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
  }
]

const CourseSlider = ({ title = "Featured Courses", subtitle }) => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = direction => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section className="py-12">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-2">
            {title}
          </h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="rounded-full"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="rounded-full"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {courses.map(course => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="flex-shrink-0 w-[300px] glass-card rounded-2xl overflow-hidden hover-lift group"
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
                  Enroll Now
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CourseSlider

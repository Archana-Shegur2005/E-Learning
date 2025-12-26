import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Play,
  BookOpen,
  Users,
  Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import heroBg from "@/assets/hero-bg.jpg"

const slides = [
  {
    id: 1,
    title: "Transform Your Future with Online Learning",
    subtitle: "Access world-class courses from industry experts",
    stats: [
      { icon: BookOpen, value: "500+", label: "Courses" },
      { icon: Users, value: "50K+", label: "Students" },
      { icon: Award, value: "100+", label: "Instructors" }
    ]
  },
  {
    id: 2,
    title: "Learn at Your Own Pace",
    subtitle: "Flexible learning designed for your busy lifestyle",
    stats: [
      { icon: BookOpen, value: "24/7", label: "Access" },
      { icon: Users, value: "Global", label: "Community" },
      { icon: Award, value: "Certified", label: "Programs" }
    ]
  },
  {
    id: 3,
    title: "Master New Skills Today",
    subtitle: "From coding to design, we have everything you need",
    stats: [
      { icon: BookOpen, value: "Expert", label: "Content" },
      { icon: Users, value: "Interactive", label: "Learning" },
      { icon: Award, value: "Career", label: "Support" }
    ]
  }
]

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = index => setCurrentSlide(index)
  const prevSlide = () =>
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length)

  return (
    <section className="relative h-[600px] lg:h-[500px] overflow-hidden rounded-2xl">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent backdrop-blur-10" />
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-10 h-full flex items-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center px-8 lg:px-16 transition-all duration-700 justify-center ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
          >
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-background mb-6 leading-tight animate-slide-up">
                {slide.title}
              </h1>
              <p
                className="text-xl text-background/80 mb-8 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                {slide.subtitle}
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-4 mb-12 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Link to="/courses">
                  <Button variant="hero" size="xl">
                    <Play size={20} />
                    Start Learning
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="heroOutline" size="xl">
                    Get Started Free
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div
                className="flex flex-wrap gap-8 animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                {slide.stats.map((stat, statIndex) => {
                  const Icon = stat.icon
                  return (
                    <div key={statIndex} className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-background/10 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-background">
                          {stat.value}
                        </p>
                        <p className="text-sm text-background/70">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/20 transition-colors z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/20 transition-colors z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-background w-8"
                : "bg-background/40 hover:bg-background/60"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel

import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content:
      "LearnHub completely transformed my career. The React course gave me the skills I needed to land my dream job.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content:
      "The Python for Data Science course is incredibly comprehensive. I went from beginner to confident in just 10 weeks.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content:
      "Amazing platform! The UI/UX course had practical projects that I could add directly to my portfolio.",
    rating: 5
  }
]

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-transparent to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            What Our <span className="gradient-text">Students</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our community of learners about their experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl border border-border p-8 md:p-12 overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />

            {/* Testimonial */}
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary/20 mb-6"
                />
                <p className="text-lg md:text-xl text-foreground mb-6 max-w-2xl">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <p className="font-heading font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft size={20} />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSlider

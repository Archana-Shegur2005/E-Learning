import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import HeroCarousel from "@/components/HeroCarousel"
import InfoSection from "@/components/InfoSection"
import CourseSlider from "@/components/CourseSlider"
import StatsSection from "@/components/StatsSection"
import ActionButtons from "@/components/ActionButtons"
import TestimonialsSlider from "@/components/TestimonialsSlider"
import Footer from "@/components/Footer"

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background m-0 w-full">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Add lg:pl-64 for large screens */}
      <main className="lg:pl-64 ">
        <div className="container mx-auto px-4 py-8">
          {/* Container 1: Hero Carousel */}
          <HeroCarousel />

          {/* Container 2: Info/Text Section */}
          <InfoSection />

          {/* Container 3: Interactive Course Slider */}
          <CourseSlider
            title="Featured Courses"
            subtitle="Explore our most popular learning paths"
          />

          {/* Container 4: Stats Section */}
          <StatsSection />

          {/* Container 5: Testimonials Slider */}
          <TestimonialsSlider />

          {/* Container 6: Action Buttons */}
          <ActionButtons />
        </div>

        <Footer />
      </main>
    </div>
  )
}

export default Index
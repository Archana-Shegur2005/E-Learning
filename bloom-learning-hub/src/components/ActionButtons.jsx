import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

const ActionButtons = ({ onGetStarted }) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join thousands of students already learning on LearnHub. Get
              started for free today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="xl"
                onClick={onGetStarted}
                className="bg-background text-foreground hover:bg-background/90 shadow-xl hover:shadow-2xl"
              >
                Get Started Free
                <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="xl"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                variant="gradient"
              >
                <BookOpen className="mr-2" />
                Browse Courses
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActionButtons

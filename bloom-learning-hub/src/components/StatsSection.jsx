import { TrendingUp, Award, Globe, Zap } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "95%",
    label: "Completion Rate",
    description: "Students who start, finish"
  },
  {
    icon: Award,
    value: "500+",
    label: "Certifications",
    description: "Industry recognized"
  },
  {
    icon: Globe,
    value: "150+",
    label: "Countries",
    description: "Global community"
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Support",
    description: "Always available"
  }
]

const StatsSection = () => {
  return (
    <section className="py-16">
      <div className="gradient-hero rounded-3xl p-8 lg:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
            Trusted by Learners Worldwide
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their
            careers through our platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-primary-foreground/100 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-primary-foreground/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-black " />
                </div>
                <p className="text-2xl font-display font-bold text-black-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-lg font-medium text-black mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

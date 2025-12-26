import { Lightbulb, Target, Rocket, Heart } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Expert-Led Courses",
    description:
      "Learn from industry professionals with years of real-world experience in their fields."
  },
  {
    icon: Target,
    title: "Practical Projects",
    description:
      "Apply your knowledge through hands-on projects that build your portfolio."
  },
  {
    icon: Rocket,
    title: "Career Support",
    description:
      "Get guidance on career paths and job opportunities in your chosen field."
  },
  {
    icon: Heart,
    title: "Community Learning",
    description:
      "Join a vibrant community of learners and share knowledge together."
  }
]

const InfoSection = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
          Why Choose <span className="gradient-text">LearnHub</span>?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We provide the tools and resources you need to succeed in your
          learning journey.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default InfoSection

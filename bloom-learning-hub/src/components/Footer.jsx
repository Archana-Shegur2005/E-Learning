import {
  GraduationCap,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin
} from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-16 w-full">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-background">
                LearnHub
              </span>
            </Link>
            <p className="text-background/70 mb-6">
              Empowering learners worldwide with expert-led courses and
              practical skills for the future.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Courses", "Instructors", "Blog", "Contact"].map(
                link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/70 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Categories</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Data Science",
                "Design",
                "Mobile Apps",
                "Business"
              ].map(cat => (
                <li key={cat}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-background/70">
                  123 Learning Street, Education City, EC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary" />
                <a
                  href="mailto:hello@learnhub.com"
                  className="text-background/70 hover:text-primary"
                >
                  hello@learnhub.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary" />
                <a
                  href="tel:+1234567890"
                  className="text-background/70 hover:text-primary"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © 2024 LearnHub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-background/50 text-sm hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-background/50 text-sm hover:text-primary"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

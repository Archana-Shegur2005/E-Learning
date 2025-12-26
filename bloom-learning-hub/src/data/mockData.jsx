export const courses = [
  {
    id: "course-1",
    name: "React Fundamentals",
    code: "REACT-101",
    duration: "8 weeks",
    instructor: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    description:
      "Master the fundamentals of React including hooks, state management, and component architecture.",
    enrolled: 1240,
    rating: 4.8,
    category: "Development"
  },
  {
    id: "course-2",
    name: "UI/UX Design Principles",
    code: "UIUX-201",
    duration: "6 weeks",
    instructor: "Michael Chen",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    description:
      "Learn the core principles of user interface and user experience design.",
    enrolled: 890,
    rating: 4.9,
    category: "Design"
  },
  {
    id: "course-3",
    name: "Python for Data Science",
    code: "PY-DS-301",
    duration: "10 weeks",
    instructor: "Emily Davis",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
    description:
      "Comprehensive Python course for data analysis and machine learning.",
    enrolled: 2100,
    rating: 4.7,
    category: "Data Science"
  },
  {
    id: "course-4",
    name: "Cloud Architecture",
    code: "CLOUD-401",
    duration: "12 weeks",
    instructor: "James Wilson",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    description:
      "Design and implement scalable cloud solutions using AWS, Azure, and GCP.",
    enrolled: 675,
    rating: 4.6,
    category: "Cloud"
  },
  {
    id: "course-5",
    name: "Mobile App Development",
    code: "MOB-101",
    duration: "8 weeks",
    instructor: "Lisa Park",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    description: "Build cross-platform mobile applications with React Native.",
    enrolled: 1560,
    rating: 4.8,
    category: "Development"
  },
  {
    id: "course-6",
    name: "Cybersecurity Essentials",
    code: "SEC-201",
    duration: "6 weeks",
    instructor: "Robert Martinez",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
    description: "Learn essential cybersecurity concepts and best practices.",
    enrolled: 920,
    rating: 4.7,
    category: "Security"
  }
]

export const students = [
  {
    id: "student-1",
    name: "John Smith",
    email: "john.smith@email.com",
    courseId: "course-1",
    courseName: "React Fundamentals",
    enrolledDate: "2024-01-15",
    progress: 75,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: "student-2",
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    courseId: "course-2",
    courseName: "UI/UX Design Principles",
    enrolledDate: "2024-02-01",
    progress: 45,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: "student-3",
    name: "David Brown",
    email: "david.brown@email.com",
    courseId: "course-3",
    courseName: "Python for Data Science",
    enrolledDate: "2024-01-20",
    progress: 90,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: "student-4",
    name: "Sophia Garcia",
    email: "sophia.garcia@email.com",
    courseId: "course-1",
    courseName: "React Fundamentals",
    enrolledDate: "2024-02-10",
    progress: 30,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: "student-5",
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    courseId: "course-4",
    courseName: "Cloud Architecture",
    enrolledDate: "2024-01-05",
    progress: 60,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: "student-6",
    name: "Mia Thompson",
    email: "mia.thompson@email.com",
    courseId: "course-5",
    courseName: "Mobile App Development",
    enrolledDate: "2024-02-15",
    progress: 55,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  }
]

export const platformStats = {
  totalCourses: 50,
  totalStudents: 12500,
  totalInstructors: 85,
  completionRate: 89
}

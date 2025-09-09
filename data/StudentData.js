// src/data/studentDashboard.js

import mathImg from "@/assets/mathematics-textbook.png"
import physicsImg from "@/assets/physics-lab.png"
import circuitsImg from "@/assets/circuit2.png"

export const quickStats = [
  { label: "Total Courses", value: "5", color: "blue" },
  { label: "Assignments Due", value: "3", color: "red" },
  { label: "Completed Modules", value: "12", color: "green" },
  { label: "Hours Studied", value: "45", color: "yellow" },
]

export const enrolledCourses = [
  {
    id: 1,
    title: "Digital Logic Design",
    progress: 70,
    instructor: "Prof. Ahmed Bello",
    image: circuitsImg,
  },
  {
    id: 2,
    title: "Mathematics for Computing",
    progress: 50,
    instructor: "Dr. Grace James",
    image: mathImg,
  },
  {
    id: 3,
    title: "Physics Lab",
    progress: 85,
    instructor: "Mr. Musa Ibrahim",
    image: physicsImg,
  },
]

export const upcomingAssignments = [
  { id: 1, title: "Logic Gates Worksheet", dueDate: "Sept 12, 2025" },
  { id: 2, title: "K-map Exercise", dueDate: "Sept 15, 2025" },
]

export const achievements = [
  { id: 1, title: "Top Scorer: Logic Design", date: "Aug 2025" },
  { id: 2, title: "Best Team Project", date: "July 2025" },
]

export const announcements = [
  {
    id: 1,
    title: "Mid-Semester Break",
    content: "Break begins Sept 20th, 2025.",
  },
  {
    id: 2,
    title: "Hackathon Alert 🚀",
    content: "Register for Py-Kathon 2.0 starting soon!",
  },
]

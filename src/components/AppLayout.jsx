import { useState } from "react"
import { motion } from "framer-motion"
import { User, BookOpen, ClipboardList, Settings } from "lucide-react"

import user from "../assets/user.jpg"
import circuit from "../assets/courses/circuit2.png"
import fullAdder from "../assets/courses/full~adder.png"
import kMap from "../assets/courses/Karnaugh-map.jpg"
import gates from "../assets/courses/logic_gate_375.png"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

  export default function AppLayout() {
    const [active, setActive] = useState("Courses")

    const courses = [
      {
        id: 1,
        name: "Logic Gates Basics",
        duration: "2h 30m",
        difficulty: "Beginner",
        image: gates,
      },
      {
        id: 2,
        name: "Karnaugh Maps Mastery",
        duration: "3h 10m",
        difficulty: "Intermediate",
        image: kMap,
      },
      {
        id: 3,
        name: "Flip-Flops & Registers",
        duration: "4h 05m",
        difficulty: "Advanced",
        image: fullAdder,
      },
      {
        id: 4,
        name: "NAND gates",
        duration: "4h 05m",
        difficulty: "Advanced",
        image: circuit,
      },
      {
        id: 4,
        name: "NAND gates",
        duration: "4h 05m",
        difficulty: "Advanced",
        image: gates,
      },
      {
        id: 4,
        name: "NAND gates",
        duration: "4h 05m",
        difficulty: "Advanced",
        image: fullAdder,
      },
    ]

    const menuItems = [
      { name: "Dashboard", icon: User },
      { name: "Courses", icon: BookOpen },
      { name: "Assignments", icon: ClipboardList },
      { name: "Settings", icon: Settings },
    ]

    return (
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-xl flex flex-col p-6">
          <div className="flex flex-col items-center mb-3">
            <img
              src = {user}
              alt="profile"
              className="rounded-full"
            />
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-sm text-gray-500">Student</p>
          </div>

          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <Button
                key={item.name}
                variant={active === item.name ? "default" : "ghost"}
                className="flex items-center justify-start gap-2"
                onClick={() => setActive(item.name)}
              >
                <item.icon className="w-5 h-5" /> {item.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6">{active}</h1>

          {active === "Courses" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-md bg-gray-400"
                >
                  <Card>
                    <img src={course.image} alt={course.name} className="w-full h-40 object-cover cursor-pointer bg-gray-400" />
                    <CardContent className="p-4">
                      <h2 className="font-semibold text-lg mb-2">{course.name}</h2>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{course.duration}</span>
                        <span>{course.difficulty}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

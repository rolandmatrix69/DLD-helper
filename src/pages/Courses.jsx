import React from 'react'
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"

import circuit from "../assets/courses/circuit2.png"
import fullAdder from "../assets/courses/full~adder.png"
import kMap from "../assets/courses/Karnaugh-map.jpg"
import gates from "../assets/courses/logic_gate_375.png"

function Courses() {
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
      id: 5,
      name: "NAND gates",
      duration: "4h 05m",
      difficulty: "Advanced",
      image: gates,
    },
    {
      id: 6,
      name: "NAND gates",
      duration: "4h 05m",
      difficulty: "Advanced",
      image: fullAdder,
    },
  ]
  return (
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
  )
}

export default Courses
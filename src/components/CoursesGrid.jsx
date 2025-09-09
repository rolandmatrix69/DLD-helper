import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CoursesGrid({ courses }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Enrolled Courses</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardContent className="p-3">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-28 object-cover rounded-md mb-3"
              />
              <h3 className="font-bold">{course.title}</h3>
              <p className="text-sm text-gray-500">{course.instructor}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Continue Learning</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

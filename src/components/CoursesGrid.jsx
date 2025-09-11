import { Card, CardContent} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CoursesGrid() {
  const enrolledCourses = [
    {
      id: 1,
      title: "Logic Gates",
      progress: 70,
      instructor: "Prof. Ahmed Bello",
      // image: circuitsImg,
    },
    {
      id: 2,
      title: "Mathematics for Computing",
      progress: 50,
      instructor: "Dr. Grace James",
      // image: mathImg,
    },
    {
      id: 3,
      title: "Number System",
      progress: 85,
      instructor: "Mr. Musa Ibrahim",
      // image: physicsImg,
    },
    {
      id: 4,
      title: "Bi conditional Logic",
      progress: 15,
      instructor: "Mr. Jamil Abdul",
      // image: physicsImg,
    },
    {
      id: 5,
      title: "BCD and gray codes",
      progress: 45,
      instructor: "Mr. Musa Ibrahim",
      // image: physicsImg,
    },
  ]
  return (
    <div className="mb-7">
      <h2 className="text-lg font-semibold mb-3">Enrolled Courses</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {enrolledCourses.map((course) => (
          <Card key={course.id}>
            <CardContent className="p-3">
              <img
                src={course?.image}
                alt={course.title}
                className="w-full h-28 object-cover rounded-md mb-3"
              />
              <h3 className="font-bold">{course.title}</h3>
              <p className="text-sm text-gray-500">{course.instructor}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-blue-500 h-2 rounded-full" /* To be styled conditionally ,if less than certain range */
                  style={{ width: `${course.progress}%`}}
                />
              </div>
            </CardContent>
            <footer className="m-3">
              <Button className="w-full">Continue Learning</Button>
            </footer>
          </Card>
        ))}
      </div>
    </div>
  )
}

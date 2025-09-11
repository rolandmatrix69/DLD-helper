import { Card, CardContent } from "@/components/ui/card"

export default function QuickStats({upcomingAssignments}) {
  const quickStats = [
    { label: "Total Courses", value: "5", color: "blue" },
    { label: "Assignments Due", value: `${upcomingAssignments.length}`, color: "red" },
    { label: "Completed Modules", value: "12", color: "green" },
    { label: "Hours Studied", value: "45", color: "yellow" },
  ]
  
  return (  
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {quickStats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className={`text-2xl font-bold text-${stat.color}-500 dark:text-gray-800`}>
              {stat.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

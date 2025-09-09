import { Card, CardContent } from "@/components/ui/card"

export default function QuickStats({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className={`text-2xl font-bold text-${stat.color}-500`}>
              {stat.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

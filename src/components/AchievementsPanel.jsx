export default function AchievementsPanel() {
  const achievements = [
    { id: 1, title: "Top Scorer: Logic Design", date: "Aug 2025" },
    { id: 2, title: "Best Team Project", date: "July 2025" },
  ]
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Achievements</h2>
        <ul className="space-y-2">
          {achievements.map((ach) => (
            <li
              key={ach.id}
              className="p-2 bg-green-100 dark:bg-green-700 rounded-md flex justify-between"
            >
              <span>{ach.title}</span>
              <span className="text-sm text-gray-500">{ach.date}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
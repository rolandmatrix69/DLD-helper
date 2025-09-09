export default function AssignmentsPanel({ assignments }) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Upcoming Assignments</h2>
        <ul className="space-y-2">
          {assignments.map((task) => (
            <li
              key={task.id}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md flex justify-between"
            >
              <span>{task.title}</span>
              <span className="text-sm text-gray-500">{task.dueDate}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
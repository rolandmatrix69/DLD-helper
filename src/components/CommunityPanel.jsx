export default function CommunityPanel({ announcements }) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Community Announcements</h2>
        <ul className="space-y-2">
          {announcements.map((note) => (
            <li
              key={note.id}
              className="p-2 bg-blue-100 dark:bg-blue-700 rounded-md"
            >
              <p className="font-bold">{note.title}</p>
              <p className="text-sm">{note.content}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
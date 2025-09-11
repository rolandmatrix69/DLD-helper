import { Bell, Sun, Moon } from "lucide-react"

export default function DashboardHeader({ isDarkMode, setIsDarkMode }) {

  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Welcome, John Doe {/*To Be replaced by user name*/}
      </h1>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
        >
          {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <button className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
          <Bell size={18} />
        </button>
      </div>
    </header>
  )
}

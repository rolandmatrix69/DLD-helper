import React from 'react'
import { Bell, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"

export function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])
  return (
    <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
    >
        {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}

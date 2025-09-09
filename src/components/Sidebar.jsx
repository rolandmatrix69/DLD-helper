import React from 'react'
import { User, BookOpen, ClipboardList, Settings} from "lucide-react"
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import user from "../assets/user.jpg"

function Sidebar({active, setActive}) {
    const navigate = useNavigate();
    const menuItems = [
        { name: "Dashboard", icon: User },
        { name: "Courses", icon: BookOpen },
        { name: "Assignments", icon: ClipboardList },
        { name: "Settings", icon: Settings },
    ]
  return (
    <div className="w-64 bg-white shadow-xl flex flex-col p-6">
          <div className="flex flex-col items-center mb-3">
            <img
              src = {user}
              alt="profile"
              className="rounded-full"
            />
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-sm text-gray-500">Student</p>
          </div>

          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <Button
                key={item.name}
                variant={active === item.name ? "default" : "ghost"}
                className="flex items-center justify-start gap-2"
                onClick={() => {
                    setActive(item.name)
                    navigate(`/app/${item.name.toLowerCase()}`);
                }}
              >
                <item.icon className="w-5 h-5" />{item.name}
              </Button>
            ))}
          </div>
        </div>
  )
}

export default Sidebar
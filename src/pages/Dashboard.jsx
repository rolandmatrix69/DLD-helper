"use client"

import { useState } from "react"
import {
  Search,
  BookOpen,
  Clock,
  Trophy,
  Users,
  Bell,
  Settings,
  Moon,
  Sun,
  Play,
  Download,
  MessageCircle,
  Calendar,
  Target,
  Award,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StudentDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const quickStats = [
    { title: "Courses Enrolled", value: "8", icon: BookOpen, color: "text-primary" },
    { title: "Assignments Pending", value: "3", icon: Clock, color: "text-secondary" },
    { title: "Average Score", value: "87%", icon: Trophy, color: "text-chart-1" },
    { title: "Study Streak", value: "12 days", icon: Target, color: "text-accent" },
  ]

  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced Mathematics",
      progress: 75,
      instructor: "Dr. Smith",
      image: "/mathematics-textbook.png",
      nextLesson: "Calculus II",
    },
    {
      id: 2,
      title: "Computer Science Fundamentals",
      progress: 60,
      instructor: "Prof. Johnson",
      image: "/computer-programming-code.jpg",
      nextLesson: "Data Structures",
    },
    {
      id: 3,
      title: "Physics Laboratory",
      progress: 90,
      instructor: "Dr. Williams",
      image: "/physics-laboratory-equipment.jpg",
      nextLesson: "Quantum Mechanics",
    },
    {
      id: 4,
      title: "English Literature",
      progress: 45,
      instructor: "Ms. Brown",
      image: "/classic-literature-books.jpg",
      nextLesson: "Shakespeare Analysis",
    },
  ]

  const upcomingAssignments = [
    { title: "Math Problem Set #5", dueDate: "Tomorrow", priority: "high", course: "Advanced Mathematics" },
    { title: "CS Project Proposal", dueDate: "Dec 15", priority: "medium", course: "Computer Science" },
    { title: "Physics Lab Report", dueDate: "Dec 18", priority: "low", course: "Physics Laboratory" },
  ]

  const achievements = [
    { title: "Perfect Attendance", description: "30 days streak", icon: Award, earned: true },
    { title: "Quick Learner", description: "Completed 5 courses", icon: TrendingUp, earned: true },
    { title: "Community Helper", description: "Helped 10 students", icon: Users, earned: false },
    { title: "Assignment Master", description: "100% submission rate", icon: CheckCircle, earned: true },
  ]

  const announcements = [
    { title: "New Course Available: Web Development", time: "2 hours ago", type: "course" },
    { title: "Assignment deadline extended for Physics Lab", time: "1 day ago", type: "assignment" },
    { title: "Study group meeting tomorrow at 3 PM", time: "2 days ago", type: "community" },
  ]

  return (
    <div className={`min-h-screen bg-background transition-colors duration-300`}>
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-foreground">StudyHub</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/student-profile.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-balance">Welcome back, Jamil 👋</h2>
            <p className="text-xl text-muted-foreground text-pretty">Ready to continue your learning journey?</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input placeholder="Search courses, topics, or assignments..." className="pl-10 py-3 text-lg" />
          </div>

          {/* Motivational Quote */}
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-6 text-center">
              <p className="text-lg font-medium text-balance">
                "The expert in anything was once a beginner who refused to give up."
              </p>
              <p className="text-sm text-muted-foreground mt-2">- Helen Hayes</p>
            </CardContent>
          </Card>
        </section>

        {/* Quick Stats */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">Your Progress at a Glance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Your Courses</h3>
              <Button>Browse All Courses</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <div>
                      <h4 className="font-semibold text-balance">{course.title}</h4>
                      <p className="text-sm text-muted-foreground">{course.instructor}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Next: {course.nextLesson}</p>
                      <Button className="w-full" size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Continue Learning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recommended Courses */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Recommended for You</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium">Web Development Basics</h5>
                        <p className="text-sm text-muted-foreground">Learn HTML, CSS & JavaScript</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h5 className="font-medium">Data Science Intro</h5>
                        <p className="text-sm text-muted-foreground">Python & Statistics</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-chart-1/10 rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-chart-1" />
                      </div>
                      <div>
                        <h5 className="font-medium">Digital Marketing</h5>
                        <p className="text-sm text-muted-foreground">Social Media & SEO</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Assignments & Quizzes</h3>
              <Button variant="outline">View Calendar</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Assignments */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Upcoming Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingAssignments.map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="space-y-1">
                        <h5 className="font-medium">{assignment.title}</h5>
                        <p className="text-sm text-muted-foreground">{assignment.course}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <Badge
                          variant={
                            assignment.priority === "high"
                              ? "destructive"
                              : assignment.priority === "medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {assignment.dueDate}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{assignment.priority} priority</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Take Quiz
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Notes
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Ask for Help
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Join Study Group
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <h3 className="text-2xl font-semibold">Your Learning Analytics</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Overall Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Overall Progress</CardTitle>
                  <CardDescription>Your learning journey so far</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">73%</div>
                    <p className="text-muted-foreground">Courses Completed</p>
                  </div>
                  <Progress value={73} className="h-3" />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-secondary">156</div>
                      <p className="text-sm text-muted-foreground">Hours Studied</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-chart-1">24</div>
                      <p className="text-sm text-muted-foreground">Certificates Earned</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle>Achievements & Badges</CardTitle>
                  <CardDescription>Your learning milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border text-center space-y-2 ${achievement.earned ? "bg-primary/5 border-primary/20" : "bg-muted/50 border-muted"}`}
                      >
                        <achievement.icon
                          className={`h-8 w-8 mx-auto ${achievement.earned ? "text-primary" : "text-muted-foreground"}`}
                        />
                        <div>
                          <h5
                            className={`font-medium text-sm ${achievement.earned ? "text-foreground" : "text-muted-foreground"}`}
                          >
                            {achievement.title}
                          </h5>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        </div>
                        {achievement.earned && (
                          <Badge variant="secondary" className="text-xs">
                            Earned
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            <h3 className="text-2xl font-semibold">Community & Collaboration</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Announcements */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Recent Announcements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${announcement.type === "course" ? "bg-primary" : announcement.type === "assignment" ? "bg-secondary" : "bg-chart-1"}`}
                      />
                      <div className="flex-1">
                        <h5 className="font-medium text-sm">{announcement.title}</h5>
                        <p className="text-xs text-muted-foreground">{announcement.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Community Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Community Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-primary">1,247</div>
                    <p className="text-sm text-muted-foreground">Active Students</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-secondary">89</div>
                    <p className="text-sm text-muted-foreground">Study Groups</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-chart-1">456</div>
                    <p className="text-sm text-muted-foreground">Q&A Discussions</p>
                  </div>
                  <Button className="w-full mt-4">
                    <Users className="h-4 w-4 mr-2" />
                    Join Discussion
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

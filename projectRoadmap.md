Landing Page
    ↓ CTA ("Get Started")
Login / Signup
    ↓
Authentication Success
    ↓
Check Role (student / tutor / admin)
    ↓
 ┌─────────────────────────────────┐
 │                                 │
 ▼                                 ▼
Student Dashboard                  Tutor Dashboard
 ( /dashboard/student )            ( /dashboard/tutor )
   - Stats                           - Course creation
   - Enrolled Courses                - Manage courses
   - Progress Tracking               - Manage enrolled students
   - Suggestions                     - Assignments management
   - Tasks & Reminders               - Analytics
   - Invite friends (ads)            - Earnings / engagement
 │                                 │
 └─────────────────────────────────┘
                ↓
               Admin Dashboard
               ( /dashboard/admin )
                 - Manage all users (students + tutors)
                 - Assign roles (promote/demote tutors)
                 - Manage courses globally
                 - System analytics & reports
                 - Platform settings


<Route path="/dashboard">
  <Route path="student" element={<StudentDashboard />} />
  <Route path="tutor" element={<TutorDashboard />} />
  <Route path="admin" element={<AdminDashboard />} />
</Route>


Students only see learning tools + enrolled courses.

Tutors only see course management tools.

Admins only see platform-wide control.
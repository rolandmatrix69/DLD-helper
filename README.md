# DLD Helper

*A modern full-stack learning assistant for Digital Logic Design (DLD).*

DLD Helper is built to support **students, educators, and enthusiasts** in mastering **Digital Logic Design**. It combines **interactive tools** (truth tables, K-maps, gate simulations) with an **LMS-style learning platform** for structured modules, quizzes, and progress tracking.

---

## ✨ Features

- 🎛 **Interactive Simulators**: Truth tables, Boolean simplification, and Karnaugh maps  
- ⚡ **Gate-Level Visualization**: Auto-generated circuits & exportable diagrams  
- 📚 **LMS-Style Dashboard**: Courses with duration, difficulty, and module previews  
- 🧑‍🏫 **Teacher Dashboard**: Create assignments, track student progress, and analytics  
- 🔒 **User Profiles & Authentication**: Secure login, personalized learning paths  
- 📱 **Responsive UI**: Built with React, Tailwind, and Framer Motion

---

## 🛠 Tech Stack

**Frontend**  
- React  
- Tailwind CSS  
- shadcn/ui  
- Framer Motion  

**Backend**  
- Node.js + Express *(or Spring Boot / Django — flexible)*  

**Database**  
- PostgreSQL / MongoDB  

**Other**  
- REST/GraphQL APIs  
- JWT Authentication  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/YOUR-USERNAME/dld-helper.git
cd dld-helper
````

### 2. Install dependencies

Frontend:

```bash
cd frontend
npm install
```

Backend:

```bash
cd backend
npm install
```

### 3. Environment setup

Create `.env` files in both `frontend` and `backend` directories:

**Frontend `.env`**

```
VITE_API_URL=http://localhost:5000
```

**Backend `.env`**

```
PORT=5000
DATABASE_URL=your-database-url
JWT_SECRET=your-secret-key
```

### 4. Run the project

Start frontend:

```bash
cd frontend
npm run dev
```

Start backend:

```bash
cd backend
npm run dev
```

Visit:

* Frontend → `http://localhost:5173`
* Backend API → `http://localhost:5000/api`

---

## 📂 Project Structure

```
dld-helper/
│
├── frontend/        # React + Tailwind + shadcn/ui + Framer Motion
│   ├── src/
│   └── public/
│
├── backend/         # Node.js + Express (API + Auth + Logic Simulation)
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── utils/
│
└── README.md
```

---

## 🤝 Contributing

We love contributions! Here’s how you can help:

1. **Fork the repo**
2. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit changes**

   ```bash
   git commit -m "Add your feature"
   ```
4. **Push branch**

   ```bash
   git push origin feature/your-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

* Follow the existing code style (lint before commit).
* Write clear commit messages.
* Add documentation for new features.
* Create small, focused PRs (avoid huge all-in-one updates).

---

## 📌 Roadmap

* [ ] Interactive truth table editor
* [ ] K-map auto-solver
* [ ] Gate-level visualization with drag-and-drop UI
* [ ] Teacher dashboard with analytics
* [ ] REST/GraphQL APIs for integrations

---

## 📜 License

This project is licensed under the **MIT License**. See `LICENSE` for details.

---

## 🙌 Acknowledgements

Built with ❤️ by the DLD Helper dev team.
Made for students, educators, and hackers everywhere.

```

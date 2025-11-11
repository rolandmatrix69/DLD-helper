# DLD-Helper — Backend (Build to Learn)

This folder contains the backend server for the Digital Logic Design (DLD) Helper application. The project is structured as a "Build to Learn" roadmap to teach Node.js, Express, and MongoDB (Mongoose) by implementing a RESTful API that manages educational content and user progress.

This README summarizes the goals, setup steps, phased learning plan, and the immediate development tasks for Phase 1.

## Quick overview

- Stack: Node.js, Express, MongoDB (Mongoose)
- Purpose: Provide RESTful endpoints to manage lessons/content and track user progress. The project is intentionally educational: each feature ties to a concept to learn.

## Getting started (Phase 1: Foundation)

Before running the server, ensure Node.js and npm are installed on your machine.

1. Clone the repository (or copy this folder into a new project).
2. Install the required packages (example):

```bash
npm install express mongoose cors dotenv
```

3. Create a `.env` file at the project root to store sensitive config like the MongoDB connection string.

Example `.env` contents:

```
PORT=5000
# IMPORTANT: replace the values below with your MongoDB Atlas credentials
MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/dld_helper?retryWrites=true&w=majority"
```

4. Start the server. Depending on the repository scripts, either:

- `node server.js` (if the main entry is `server.js`), or
- add `nodemon` and run `nodemon server.js` for development.

Adjust the start command to match the repository's actual entry point (for example `app.js` or `index.js`).

## Phased Learning & Development Roadmap

This backend is intentionally organized into four progressive phases to teach the core concepts while building functionality.

Phase 1 — Node.js Foundation & Project Setup
- Node.js, npm, package.json — project / dependency management.
- require vs. import/export — module systems in Node.
- Promises & async/await — asynchronous programming for DB and I/O.
- Environment variables & dotenv — secure configuration.

Phase 2 — Express Server & Middleware (The Traffic Controller)
- Express basics (app.listen, app.use) — run and mount middleware.
- Middleware (cors, express.json()) — CORS and body parsing.
- REST principles (GET, POST, PUT, DELETE) — map HTTP verbs to CRUD.
- Route parameters (/lessons/:id) — dynamic URL handling via `req.params`.

Phase 3 — MongoDB & Mongoose (The Data Layer)
- NoSQL vs. SQL — why flexible JSON-like documents fit the domain.
- Mongoose Schema — define models (e.g., `Lesson.js`) with types and validation.
- Mongoose CRUD methods — create(), find(), findByIdAndUpdate(), findByIdAndDelete().
- Error handling — use try/catch around async DB calls.

Phase 4 — Testing & Advanced Features
- Testing with Postman/Insomnia — exercise each endpoint manually.
- MVC / separation of concerns — split into `models/`, `controllers/`, `routes/`.
- Authentication — bcrypt for password hashing and JWT for protected routes.
- Auth middleware — protect routes that update user progress.

## Current Focus (Immediate Next Steps)

You have the basic server setup (e.g., `server.js`) and a `models/Lesson.js` model. The next concrete work items are:

1. Create controllers: `controllers/lessonController.js`
   - Implement async functions using the Mongoose `Lesson` model for:
     - getAllLessons (GET /api/lessons)
     - getLessonById (GET /api/lessons/:id)
     - createLesson (POST /api/lessons)
     - updateLesson (PUT /api/lessons/:id)
     - deleteLesson (DELETE /api/lessons/:id)
   - Wrap DB calls in try/catch and return proper HTTP status codes and JSON responses.

2. Create routes: `routes/lessonRoutes.js`
   - Map RESTful paths under `/api/lessons` to the controller functions.
   - Example route usage in `server.js`:

```js
const lessonRoutes = require('./routes/lessonRoutes');
app.use('/api/lessons', lessonRoutes);
```

3. Test endpoints using Postman or Insomnia — verify CRUD operations.

## Example API endpoints (lessons)

- GET    /api/lessons         — list all lessons
- GET    /api/lessons/:id     — get lesson by id
- POST   /api/lessons         — create a new lesson (JSON body)
- PUT    /api/lessons/:id     — update an existing lesson (JSON body)
- DELETE /api/lessons/:id     — delete a lesson

Payload example for POST/PUT (adapt to `Lesson` schema fields):

```json
{
  "title": "Combinational Logic",
  "description": "Intro to gates and boolean algebra",
  "content": "...",
  "tags": ["gates", "boolean"],
  "estimatedTime": 30
}
```

## Controller contract (tiny)

- Inputs: `req.params`, `req.body` (JSON), `req.query` when needed
- Outputs: JSON response and appropriate HTTP status codes (200, 201, 400, 404, 500)
- Error modes: validation errors (400), not found (404), server/DB errors (500)

Edge cases to consider
- Missing or invalid fields in POST/PUT
- Invalid MongoDB ObjectId format in route params
- DB connection failures/timeouts
- Concurrent updates (consider using optimistic updates or validation)

## Testing suggestions

- Use Postman or Insomnia to test each route.
- Start with the happy path: create a lesson, retrieve it, update it, and delete it.
- Test error paths: bad IDs, missing required fields.

## Next steps & small improvements

- Implement the controllers and routes described above.
- Add basic unit/integration tests for the lessons endpoints (use Jest + Supertest or a similar stack).
- Add README links referencing the frontend wiring and how the API will be consumed.
- Later: implement user authentication (bcrypt + JWT) and protect progress-related routes.

## Completion status

This README documents the Phase 1 plan and immediate development tasks: create `controllers/lessonController.js`, create `routes/lessonRoutes.js`, and test endpoints with Postman.

If you'd like, I can implement `controllers/lessonController.js` and `routes/lessonRoutes.js` next and run quick smoke tests for each endpoint.

---

Last updated: November 11, 2025

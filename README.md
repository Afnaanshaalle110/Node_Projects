# Task Management API

A simple Node.js task management API that handles CRUD operations for task management. This project uses the built-in HTTP module and file system operations to create, read, update, and delete tasks.

## Features

- **GET /tasks**: Retrieve all tasks.
- **POST /tasks**: Create a new task with optional image upload.
- **PATCH /tasks**: Update an existing task (not yet implemented).
- **DELETE /tasks**: Delete a task (not yet implemented).

## Project Structure

```bash
.
├── controllers
│   └── taskControllers.js
├── routes
│   └── taskRoutes.js
├── utils
│   └── fileHandler.js
├── data
│   └── tasks.json
├── server.js
└── README.md

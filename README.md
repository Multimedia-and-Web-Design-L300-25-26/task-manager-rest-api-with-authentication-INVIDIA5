# Task Manager API

A simple Task Manager REST API built with Node.js, Express, MongoDB, Mongoose, and JWT authentication.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create your environment file:

```bash
cp .env.example .env
```

Then update `.env` with your own values.

## Scripts

- `npm run dev` - start the server in development mode with nodemon
- `npm start` - start the server in production mode
- `npm test` - run the Jest test suite

## Environment Variables

- `PORT` - Port the server runs on
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key used to sign JWT tokens

## API Overview

### Auth

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive a JWT

### Tasks (protected, requires `Authorization: Bearer <token>`)

- `POST /api/tasks` - Create a new task for the authenticated user
- `GET /api/tasks` - Get all tasks for the authenticated user
- `DELETE /api/tasks/:id` - Delete a task by ID (only if the user is the owner)

# Task Manager REST API

Simple Task Manager REST API built with Node.js, Express, MongoDB, and JWT authentication.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create an `.env` file:

   ```bash
   cp .env.example .env
   ```

   Then update the values for `MONGO_URI` and `JWT_SECRET`.

3. Run in development mode:

   ```bash
   npm run dev
   ```

4. Run in production mode:

   ```bash
   npm start
   ```

## API Overview

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login and obtain a JWT
- `POST /api/tasks` – Create a task (authenticated)
- `GET /api/tasks` – Get tasks for authenticated user
- `DELETE /api/tasks/:id` – Delete a task by ID (owner only)

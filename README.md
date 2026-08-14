# MERN Authentication System

A secure full-stack authentication system built with the **MERN** stack and **JWT**.

## Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Frontend   | React 18 + Vite         |
| Backend    | Node.js + Express.js    |
| Database   | MongoDB + Mongoose      |
| Auth       | JWT + bcryptjs          |
| Styling    | Vanilla CSS (Dark UI)   |

## Features

- ✅ User Registration with validation
- ✅ User Login with JWT token
- ✅ Protected routes (frontend & backend)
- ✅ Persistent sessions via localStorage
- ✅ Password hashing with bcryptjs (salt: 12)
- ✅ HTTP hardening with Helmet
- ✅ Toast notifications
- ✅ Responsive dark glassmorphism UI

## API Endpoints

| Method | Endpoint             | Auth | Description       |
|--------|----------------------|------|-------------------|
| POST   | `/api/auth/register` | ❌   | Register new user |
| POST   | `/api/auth/login`    | ❌   | Login & get JWT   |
| GET    | `/api/auth/me`       | ✅   | Get current user  |

## Getting Started

### Prerequisites
- Node.js ≥ 18
- MongoDB (local or Atlas)

### 1. Clone the repo
```bash
git clone https://github.com/Hritikraushan-web/mern-auth.git
cd mern-auth
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create `server/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern-auth
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd ../client
npm install
npm run dev
```

### 4. Open the App
Visit **http://localhost:5173**

## Project Structure

```
mern-auth/
├── server/
│   ├── config/db.js
│   ├── controllers/authController.js
│   ├── middleware/authMiddleware.js
│   ├── models/User.js
│   ├── routes/authRoutes.js
│   └── server.js
└── client/
    └── src/
        ├── api/auth.js
        ├── context/AuthContext.jsx
        ├── components/
        │   ├── Navbar.jsx
        │   └── PrivateRoute.jsx
        └── pages/
            ├── Login.jsx
            ├── Register.jsx
            └── Dashboard.jsx
```

## License

MIT

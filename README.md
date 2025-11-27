# Full Stack Login & Registration System (React + Node.js + MySQL)

This is a full-stack assignment project built using **React (Vite)** for the frontend and **Node.js + Express + MySQL** for the backend.

The project includes:

- User Registration
- User Login
- Password hashing
- JWT-based authentication
- Protected route
- Displaying static table after login
- Saving user + token in browser localStorage

---

##  Tech Stack

### **Frontend**
- React (Vite)
- Axios
- React Router DOM
- Modern CSS UI

### **Backend**
- Node.js
- Express.js
- MySQL
- JWT Authentication
- bcryptjs (password hashing)
- CORS

---

##  Project Structure

```
react_assignment/
│
├── frontend/          # React (Vite) Frontend
│   ├── src/
│   │   ├── pages/
│   │   │    ├── Login.jsx
│   │   │    ├── Register.jsx
│   │   │    ├── TablePage.jsx
│   │   │    ├── Auth.css
│   │   │    └── Table.css
│   │   ├── components/
│   │   │    └── ProtectedRoute.jsx
│   │   ├── service/
│   │   │    └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── backend/           # Node.js Backend
    ├── server.js
    ├── config/
    │    └── db.js
    ├── routes/
    │    └── auth.js
    ├── controllers/
    │    └── authController.js
    ├── models/
    │    └── User.js
    ├── .env
    └── package.json
```

---

## 🔧 How to Run the Backend

1. Go to backend folder:

```
cd backend
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

## 🗄 MySQL Database Setup

Run these SQL commands:

```sql
CREATE DATABASE react_assignment_db;

USE react_assignment_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  dob DATE,
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255)
);
```

---

## 🔧 How to Run the Frontend

1. Go to frontend folder:

```
cd frontend
```

2. Install dependencies:

```
npm install
```

3. Start the React app:

```
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

##  Features

### ✔ User Registration
- Stores full name, dob, email, password
- Password encrypted with bcrypt
- Returns JWT token + user info

### ✔ User Login
- Verifies email + password
- Returns JWT token

### ✔ LocalStorage Integration
Stores after login/registration:
```json
token
user
```

### ✔ Protected Page
User cannot access the table page unless JWT token is available.

### ✔ Responsive Modern UI
- Gradient background
- Centered auth card
- Animated UI
- Professional look

---

##  API Endpoints

### Register API
```
POST /api/auth/register
```

### Login API
```
POST /api/auth/login

---

## Author
**Prashant Kumar Jha**

---



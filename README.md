# 🎬 Tickr – Movie Ticket Booking Web App

Tickr is a full-stack web-based ticket booking system where users can browse movies, select theatre screens, and book seats. It features an admin panel for managing movies and posters, and handles high concurrency during seat booking using PostgreSQL transactions.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Midhilesh2003/tickr.git
cd tickr
```

### 2. Set Up PostgreSQL

- Create a database named `tickr` using `pgAdmin` or CLI
- Run the `tickr_schema.sql` to create tables

### 3. Configure Backend

```bash
cd tickr-backend
npm install
```

Create a `.env` file in the backend folder:

```env
PORT=3000
DATABASE_URL=postgresql://postgres:admin@123@localhost:5432/tickr
```

### 4. Start the Server

```bash
npm run dev
```

### 5. Open Frontend

- Use Live Server or manually open `index.html` and `admin.html` in the browser.

---

## 🧪 API Documentation

### 📫 Base URL

```
http://localhost:3000/api
```

### 📚 Endpoints

#### 🎞️ Movies

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/movies`        | List all movies          |
| POST   | `/movies`        | Add a new movie (with poster) |

#### 🏢 Screens

| Method | Endpoint                          | Description                    |
|--------|-----------------------------------|--------------------------------|
| GET    | `/movies/:movieId/screens`        | Get screens for a movie        |

#### 💺 Bookings

| Method | Endpoint                          | Description                    |
|--------|-----------------------------------|--------------------------------|
| GET    | `/screens/:screenId/seats`        | Get booked seats for a screen |
| POST   | `/screens/:screenId/book`         | Book selected seats            |

---

## 📄 Postman Collection

A Postman collection is included to test all the API endpoints:

📁 [Download Tickr.postman_collection.json](./docs/Tickr.postman_collection.json)

To use:

1. Open Postman
2. Import the collection file
3. Set environment variable `{{base_url}}` to `http://localhost:3000/api`

---

## 📁 Folder Structure

```
tickr/
├── admin.html
├── index.html
├── movies.html
├── seating.html
├── style.css
├── tickr-backend/
│   ├── controllers/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   ├── db.js
│   └── .env
```

---

## 🔧 License

This project is for educational purposes. Built for demonstration and internship assessments.

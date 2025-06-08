# 🎬 Tickr – Movie Ticket Booking Web App

Tickr is a full-stack web-based ticket booking platform inspired by RedBus and BookMyShow. Users can browse movies, select seats, and book tickets. Admins can manage movie listings with posters via a drag-and-drop UI.

---

## 🚀 Features

- 🎞️ Movie management with poster upload (Admin)
- 🏙️ City and theatre-based screening
- 💺 Visual seat selection
- 🔒 Concurrency-safe seat booking using PostgreSQL transactions
- 📁 Poster uploads using drag & drop

---

## 📦 Tech Stack

| Layer       | Technology           |
|-------------|----------------------|
| Frontend    | HTML, CSS, JavaScript |
| Backend     | Node.js, Express.js   |
| Database    | PostgreSQL            |
| File Upload | Multer                |

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/tickr.git
cd tickr
```

### 2. Setup Database

- Create a database named `tickr` using `pgAdmin` or CLI
- Run the schema from `tickr_schema.sql`

### 3. Configure Backend

```bash
cd tickr-backend
npm install
```

Create a `.env` file:

```
PORT=3000
DATABASE_URL=postgresql://postgres:<your-password>@localhost:5432/tickr
```

### 4. Start the Server

```bash
npm run dev
```

---

## 👩‍💼 Admin Usage

- Open `admin.html`
- Fill in movie details
- Drag and drop poster
- Submit to save in DB

---

## 👥 User Workflow

1. Visit `index.html`
2. Select a movie → Go to `movies.html`
3. Select a screen → Open `seating.html`
4. Choose seats → Click "Book"

---

## 🔍 API Endpoints

| Method | Endpoint                             | Description                   |
|--------|--------------------------------------|-------------------------------|
| GET    | `/api/movies`                        | List all movies               |
| POST   | `/api/movies`                        | Add a movie with poster       |
| GET    | `/api/movies/:movieId/screens`       | Get screens for movie         |
| GET    | `/api/screens/:screenId/seats`       | Get booked seat numbers       |
| POST   | `/api/screens/:screenId/book`        | Book selected seats           |

---

## 🔧 License

This project is for educational and demonstration purposes only.

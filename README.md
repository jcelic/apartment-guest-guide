# Apartment Guest Guide

![React](https://img.shields.io/badge/React-19-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![i18next](https://img.shields.io/badge/i18next-multilanguage-green)

A modern web application that provides apartment guests with all important information in one place.

Instead of sending multiple messages with arrival instructions, WiFi credentials, house rules, local recommendations and checkout information, guests receive a single private link containing everything they need during their stay.

Each reservation receives its own unique access token which is validated by the backend before access is granted.

The application is designed for real guests staying in my apartment and acts as a digital guest guide available before and throughout their stay.

---

## Live Demo

https://apartment-guest-guide.vercel.app/guide/jhkfds78643kjhfdwjkfjkssdifz72341

---

## Screenshots

### Home

![Home](./screenshots/home.png)

### Arrival Instructions

![Arrival](./screenshots/arrival.png)

### Apartment Information

![Apartment Information](./screenshots/apartment-info.png)

### Checkout

![Checkout](./screenshots/checkout.png)

### Explore

![Explore](./screenshots/explore.png)

---

## Features

### Reservation-Based Access

- Unique guest access links
- Token validation
- Automatic expiration after checkout
- Invalid and expired access protection

### Guest Information

- Arrival instructions
- WiFi credentials
- Building access codes
- Lockbox instructions
- Host contact information
- Apartment information
- House rules
- Checkout instructions

### Apartment Guide

- TV instructions
- Dishwasher guide
- Coffee maker guide
- Appliance information
- Image galleries

### Explore Zadar

- Beaches
- Restaurants
- Supermarkets
- Attractions
- Health information

### User Experience

- Responsive design
- Fast page navigation
- Multi-language support
- Copy-to-clipboard actions
- Modern card-based UI
- Implemented PWA support and achieved a smooth installation experience on Android, but ultimately removed it because equivalent behavior could not be reliably provided on iOS.

---

## Supported Languages

- English
- Croatian
- German
- Italian
- French
- Spanish
- Chinese

---

## Tech Stack

### Frontend

- React 19
- React Router
- React Query
- Vite
- CSS Modules
- React Hot Toast
- React Icons
- Yet Another React Lightbox
- i18next

### Backend

- Node.js
- Express

### Database

- PostgreSQL
- Neon

### Deployment

- Vercel (Frontend)
- Render (Backend)
- Neon (Database)

---

## Project Structure

```bash
apartment-guest-guide/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── i18n/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/jcelic/apartment-guest-guide.git
```

Navigate to the project:

```bash
cd apartment-guest-guide
```

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

---

## Environment Variables

Copy the example files:

```bash
backend/.env.example -> backend/.env
frontend/.env.example -> frontend/.env
```

### Backend

Create a `.env` file inside the backend directory:

```env
DATABASE_URL=your_postgresql_connection_string
PORT=3001
```

For a local PostgreSQL installation, update `DATABASE_URL` with your PostgreSQL username, password and database name.

Example:

```env
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/apartment_guest_guide
PORT=3001
```

### Frontend

Create a `.env` file inside the frontend directory:

```env
VITE_API_URL=http://localhost:3001
```

---

## Database Setup

Create a PostgreSQL database.

```bash
createdb apartment_guest_guide

psql -d apartment_guest_guide -f backend/src/db/schema.sql
psql -d apartment_guest_guide -f backend/src/db/seed.sql
```

The seed file creates a demo reservation, guest access token and apartment information used by the guide.

---

## Running Locally

### Start Backend

```bash
cd backend
npm run dev
```

Backend runs on:

```txt
http://localhost:3001
```

### Start Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

## Demo Access

After running the seed file, use the demo token:

```txt
jhkfds78643kjhfdwjkfjkssdifz72341
```

Guest guide URL:

```txt
http://localhost:5173/guide/jhkfds78643kjhfdwjkfjkssdifz72341
```

---

## Future Improvements

- Parking information and instructions
- Real photos

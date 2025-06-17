# Food Delivery App (MERN Stack)

This is a full-stack food ordering application built using the MERN stack. It allows users to browse food items, place orders, and make payments. The admin can manage the menu, view orders, and update item availability.

---

## 🚀 Features

- User authentication (login/signup)
- Browse food menu with dynamic filtering
- Cart and order placement flow
- Stripe integration for payments
- Admin panel for managing food items and orders

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Payments:** Stripe
- **Image Uploads:** *Coming soon (Multer)*
- **Deployment:** Render *(temporarily removed)*

---

## 🚧 Current Status

> This project is currently being updated.

- When this app was originally developed, images were stored directly in the `assets` folder.
- I am now **integrating `multer`** to allow image uploads for food items and profile management.
- During this update phase, the **live demo link has been temporarily removed** to avoid broken or incomplete behavior.

---

## 🔧 How to Run Locally

1. Clone the repo and install dependencies in both the `Front-end/Food-App` and `Back-end` directories.
2. Add your `.env` file with valid values for:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `STRIPE_SECRET_KEY`
   - etc.

3. Start the backend:
   ```bash
   cd Back-end
   npm install
   nodemon server.js

3. Start the backend:
   ```bash
   cd Back-end
   npm install
   nodemon server.js

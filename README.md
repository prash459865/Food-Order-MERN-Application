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
- **Deployment:** Render (temporarily removed)

---

## 🚧 Current Status

> This project is currently being updated.

- When this app was originally developed, image was picked uploaded to assests folder.
- I am now **integrating `multer`** to allow image uploads for food items and profile management.
- During this update phase, the **live demo link has been temporarily removed** to avoid broken states or errors.

---

## 🔧 How to Run Locally

1. Clone the repo and install dependencies in both `Front-end/Food-App` and `Back-end` directories.
2. Add your `.env` file with proper MongoDB, Stripe, and JWT keys.

3. Start the backend:  
   cd Back-end
   nodemon server.js
4.) Start the frontend
    cd Front-end
    cd Food-App
    npm run dev
   

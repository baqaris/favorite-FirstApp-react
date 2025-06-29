# Favorite First App React 🚀

This is a React + Next.js based web application built as a learning project.  
It includes multiple features like a registration form, task management system, a custom music player, and a product gallery with image zoom.

---

## ✨ Features

### 📝 Registration Form
- Name, email, phone, and password fields
- "Agree to terms" checkbox

### ✅ Task Management
- Add, complete, and delete tasks
- Live counter for tasks
- Circular custom-styled checkboxes

### 📄 Multi-Page Routing
- Pages like `/registrationPage`, `/music`, `/aboutus`
- Uses **Next.js App Router**

### 🔗 Client-side Navigation
- Uses `next/link` for fast page transitions

### 🧩 Component-based Architecture
- Reusable components like `RegistrationForm`, `RegButton`, `BurgerMenu`, etc.

### 🎧 Custom Music Player
- Background video and stylish layout
- Animated Play, Pause, Repeat buttons (SVG)
- Circular image of a music listener
- Audio progress bar with hover effects

### 🛍️ Product Gallery with API & Image Zoom
- 📦 Dynamically fetches products from [Fake Store API](https://fakestoreapi.com)
- 🔁 User can change `sort` order (`asc` / `desc`) and `limit` of displayed items
- 🌀 Loading spinner shows while fetching products
- 🖼️ Clicking a product image opens a fullscreen **zoom modal**
- ❌ Modal closes via **X** or clicking outside the image
- 🎨 Hover effects and scale transitions for interactive UI
- 🧠 Learned about TypeScript's `interface`, conditional rendering, and modal structure

---

## 💅 Tech Stack

- React (w/ `"use client"` in Next.js)
- TypeScript
- Next.js (App Router)
- CSS Modules
- Axios
- Git & GitHub

---

## 🧪 How to Run the Project Locally

```bash
git clone https://github.com/baqaris/favorite-FirstApp-react.git
cd favorite-FirstApp-react
npm install
npm run dev






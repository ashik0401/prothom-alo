# Prothom Alo Clone

A modern, responsive news portal built with **React** and **Vite**. This project replicates the layout and functionality of a world-class news website, featuring dynamic components for headlines, categories, and detailed news views.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have **Node.js (v18 or higher)** and **npm** installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/prothom-alo.git](https://github.com/your-username/prothom-alo.git)


2. **Navigate to the project directory:
 cd prothom-alo-clone

 3. **Install dependencies:
 npm install

 4. **Run the development server:
 npm run dev

 5. **Access the App: Open your browser and navigate to http://localhost:5173.


 # 📁 Folder Structure
The project follows a modular structure to ensure scalability and ease of maintenance:

prothom-alo-news/
│
├─ public/               
│   └─ newsGrid.json       
├─ src/
│   ├─ assets/            
│   │   └─ logo.png
│   ├─ components/       
│   │   ├─ Hero.jsx
│   │   ├─ Navbar.jsx
│   │   ├─ PreHeader.jsx
│   │   ├─ RightSideNews.jsx
│   │   └─ SideNews.jsx
│   ├─ pages/             
│   │   ├─ main/
│   │   │   ├─ Details.jsx
│   │   │   └─ MainNewsSection.jsx
│   │   ├─ Home.jsx
│   │   ├─ Layout.jsx
│   │   └─ NewsDetails.jsx
│   ├─ App.jsx
│   ├─ index.jsx
│   ├─ Routes.jsx         
│   └─ App.css
│
├─ package.json
├─ vite.config.js
├─ README.md
└─ .gitignore


# ✨ Key Features
* Responsive Design: Fully optimized for mobile, tablet, and desktop views using Tailwind CSS.

* Dynamic Routing: Seamless navigation between the home page and news details using react-router.

* Modular Architecture: Components are split into logical units (Navbar, Hero, Sidebars) for high reusability.

* Vite Powered: Extremely fast Hot Module Replacement (HMR) for a smooth development experience.

* Data Driven: News content is fetched dynamically from local or remote JSON sources.

* Clean UI: Modern typography and layout inspired by leading digital newspapers.


# 🛠️ Tech Stack
Frontend: React.js

Build Tool: Vite

Styling: Tailwind CSS

Routing: React Router DOM

Icons: Lucide React


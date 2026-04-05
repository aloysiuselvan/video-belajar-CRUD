# VideoBelajar-Full

A premium, high-performance video learning platform built with **React**, **Vite**, and **Tailwind CSS**. This project features a modern feature-based architecture, full mobile responsiveness, and clean, human-written code.

## Key Features

- **Fully Responsive**: Optimized for all devices, from mobile phones to high-resolution desktops.
- **Premium UI/UX**: Modern design with consistent branding, smooth transitions, and intuitive navigation.
- **Scalable Architecture**: Organized using a feature-based structure for easy maintenance and expansion.
- **Interactive CRUD Dashboard**: Manage courses dynamically from a dedicated `/manage-courses` page. Edits sync globally instantly.
- **Client-Side Image Upload**: Uses `FileReader` (Base64) to allow robust local image previews and modifications without a backend.
- **Complete Flow**: Includes course browsing, product details, payment checkout, and student dashboards.

##  Tech Stack

- **Frontend**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Project Structure

```bash
video-belajar-full/
├── app/                  
│   ├── src/
│   │   ├── assets/       
│   │   ├── components/   
│   │   ├── features/     
│   │   ├── layouts/      
│   │   ├── pages/        
│   │   ├── App.jsx       
│   │   └── main.jsx      
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md             
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the application directory:
   ```bash
   cd app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Application Usage Guide

Once the server is running, you can access the application through your browser:

1. **Homepage (`/`)**: 
   - View the landing page and browse all available courses. The latest courses added by the admin will appear at the top-left of the course grid automatically.

2. **Course Management (`/manage-courses`)**:
   - Access the dedicated **CRUD Dashboard**.
   - Browse the tabular list of all courses currently in the system state.
   - Click **"Tambah Course"** to add a new course via the `/manage-courses/add` route.
   - You can upload custom thumbnail images from your local computer. The app uses the `FileReader API (Base64)` to simulate image uploading directly on the client-side without needing a backend server!
   - Real-time updates: Any additions, edits, or deletions made here will immediately sync to the global state and reflect on the Homepage.

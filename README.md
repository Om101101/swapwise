<div align="center">

<img src="https://img.shields.io/badge/SwapWise-AI%20Skill%20Exchange-c9a87c?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2M5YTg3YyIgZD0iTTEyIDJMMiA3bDEwIDUgMTAtNS0xMC01ek0yIDE3bDEwIDUgMTAtNS0xMC01LTEwIDV6Ii8+PC9zdmc+" alt="SwapWise Banner" />

# 🔁 SwapWise

### _AI-Powered Skill Exchange Platform_

**"Why pay when you can swap?"**

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-412991?style=flat-square&logo=openai)](https://openai.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-Real--time-010101?style=flat-square&logo=socket.io)](https://socket.io/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat-square&logo=docker)](https://docker.com/)

---

> 🎓 **Major Project** — BCA 3rd Year, 6th Semester  
> 🏛️ **Era University, Lucknow**  
> 👨‍💻 **Developed by:** Om Jaiswal (Frontend Developer)  
> 👨‍🏫 **Under the Guidance of:** Dr. Simab Hasan Sir  
> 🏢 **Department of Computer Science**

---

</div>

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Problem Statement](#-problem-statement)
- [Key Features](#-key-features)
- [AI Features](#-ai-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [API Overview](#-api-overview)
- [Real-Time Features](#-real-time-features)
- [DevOps & Deployment](#-devops--deployment)
- [Screenshots](#-screenshots)
- [Author](#-author)
- [Acknowledgements](#-acknowledgements)

---

## 🧠 About the Project

**SwapWise** is a full-stack, AI-powered community skill exchange platform that lets users **trade skills instead of money**. Think of it as _"Tinder for Skills"_ — where the AI intelligently matches people based on what they can teach and what they want to learn.

Whether you're a graphic designer wanting to learn guitar, or a developer wanting to learn photography — SwapWise finds your perfect skill-swap partner.

The platform leverages **OpenAI embeddings**, **vector search**, and **real-time communication** to create a seamless, intelligent skill exchange experience.

---

## ❓ Problem Statement

> Traditional learning platforms are expensive. Freelancing platforms are transactional. Community learning is fragmented and hard to discover.

SwapWise solves this by enabling:

- **Zero-cost skill acquisition** through mutual exchange
- **AI-powered matching** that understands skill semantics, not just keywords
- **Community-driven growth** with gamification and reputation systems
- **Real-time collaboration** tools built directly into the platform

---

## ✨ Key Features

### 👤 User System

- JWT Authentication with Refresh Token rotation
- Profile creation with avatar upload (Cloudinary CDN)
- Skill tagging — what you **Offer** vs what you **Want**
- Public profile pages with portfolio showcase

### 🔁 Swap System

- Create, send, accept, and manage swap requests
- Swap history and status tracking
- Rating & Review system post-swap
- Swap detail view with timeline

### 💬 Real-Time Chat

- Socket.IO powered instant messaging
- File sharing & voice note support
- ChatRoom with read receipts
- Notification system (in-app + real-time)

### 🔍 Discovery & Search

- Advanced search by skill, location, and expertise level
- Public Explore page for browsing without login
- Trending skills and recommendations

### 📅 Scheduling

- Calendar integration for scheduling swap sessions
- Booking and appointment management

### 🏆 Gamification

- XP Points & Badges system
- Leaderboard rankings
- Mentor Mode for experienced users

### 🛡️ Admin Panel

- User management dashboard
- Analytics and platform statistics
- Fraud report management
- Content moderation

---

## 🤖 AI Features

| Feature                        | Description                                             | Tech Used                                  |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------------ |
| **Skill Matching Engine**      | Semantically matches users based on skill compatibility | OpenAI Embeddings + Pinecone Vector Search |
| **Recommendation System**      | Suggests swaps, skills, and trending users              | Collaborative Filtering + AI               |
| **Profile Analyzer**           | Analyzes profiles and gives improvement suggestions     | GPT-4                                      |
| **AI Chat Assistant**          | In-platform assistant for guidance                      | OpenAI API + LangChain                     |
| **Content Generator**          | Auto-generates bios and skill descriptions              | GPT-4 Prompting                            |
| **Resume & Portfolio Builder** | AI-assisted portfolio generation                        | OpenAI API                                 |
| **Fraud Detection**            | Detects suspicious behavior and fake profiles           | ML-based heuristics                        |
| **Skill Gap Analysis**         | Identifies learning gaps and recommends paths           | GPT-4 + Embeddings                         |

---

## 🛠️ Tech Stack

### 🎨 Frontend

| Technology             | Version | Purpose                                     |
| ---------------------- | ------- | ------------------------------------------- |
| **React**              | 19.x    | UI Framework                                |
| **Vite**               | 6.x     | Build Tool & Dev Server                     |
| **TailwindCSS**        | v4.x    | Utility-first Styling (`@theme {}` blocks)  |
| **Radix UI**           | latest  | Headless Accessible UI Primitives           |
| **Framer Motion**      | latest  | Spring animations & scroll effects          |
| **GSAP**               | latest  | Hero sequence & complex timeline animations |
| **Redux Toolkit**      | latest  | Global state management                     |
| **TanStack Query**     | v5      | Server state, caching & data fetching       |
| **TanStack Virtual**   | latest  | List virtualization for performance         |
| **React Router DOM**   | v6      | Client-side routing                         |
| **Socket.IO Client**   | latest  | Real-time WebSocket communication           |
| **Axios**              | latest  | HTTP requests                               |
| **PostHog / Mixpanel** | latest  | Product analytics                           |
| **Sentry**             | latest  | Frontend error tracking                     |

### ⚙️ Backend

| Technology               | Version  | Purpose                                  |
| ------------------------ | -------- | ---------------------------------------- |
| **Node.js**              | 20.x LTS | Runtime Environment                      |
| **Express.js**           | 4.x      | Web Framework                            |
| **MongoDB Atlas**        | Cloud    | Primary Database                         |
| **Mongoose**             | 8.x      | MongoDB ODM                              |
| **Socket.IO**            | latest   | Real-time event handling                 |
| **JWT (jsonwebtoken)**   | latest   | Authentication (Access + Refresh Tokens) |
| **Bcryptjs**             | latest   | Password hashing                         |
| **Multer**               | latest   | File upload handling                     |
| **Cloudinary**           | latest   | CDN image storage                        |
| **Nodemailer**           | latest   | Email service                            |
| **Express Validator**    | latest   | Input validation                         |
| **Express Rate Limit**   | latest   | API rate limiting                        |
| **Helmet**               | latest   | HTTP security headers                    |
| **CORS**                 | latest   | Cross-origin resource sharing            |
| **Dotenv**               | latest   | Environment variables                    |
| **Sentry**               | latest   | Backend error tracking                   |
| **Prometheus + Grafana** | latest   | Infrastructure monitoring                |

### 🧠 AI & Vector Search

| Technology                                 | Purpose                                   |
| ------------------------------------------ | ----------------------------------------- |
| **OpenAI API (GPT-4 + Embeddings)**        | AI features, content generation, analysis |
| **Pinecone / MongoDB Atlas Vector Search** | Semantic skill matching & recommendations |
| **LangChain**                              | LLM orchestration (optional layer)        |

### 🚀 DevOps & Infrastructure

| Technology                  | Purpose                      |
| --------------------------- | ---------------------------- |
| **Docker + Docker Compose** | Containerization             |
| **GitHub Actions**          | CI/CD Pipeline               |
| **Vercel**                  | Frontend deployment          |
| **Render / AWS**            | Backend deployment           |
| **Redis**                   | Caching & session management |

---

## 📁 Project Structure

```
swapwise/
├── 📁 client/                          # React Frontend (Vite)
│   ├── 📁 public/                      # Static assets
│   ├── 📁 src/
│   │   ├── 📁 assets/                  # Fonts, icons, images
│   │   ├── 📁 components/
│   │   │   ├── 📁 animations/          # GSAP & Framer Motion components
│   │   │   │   ├── AnimatedCounter.jsx
│   │   │   │   ├── MagneticButton.jsx
│   │   │   │   ├── PageTransition.jsx
│   │   │   │   ├── ScrollReveal.jsx
│   │   │   │   └── TypewriterText.jsx
│   │   │   ├── 📁 common/              # Reusable UI components
│   │   │   │   ├── Avatar.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── SkillCard.jsx
│   │   │   │   ├── SwapCard.jsx
│   │   │   │   └── UserCard.jsx
│   │   │   ├── 📁 layout/              # Page layout wrappers
│   │   │   │   ├── AuthLayout.jsx
│   │   │   │   ├── DashboardLayout.jsx
│   │   │   │   └── PublicLayout.jsx
│   │   │   └── 📁 sections/           # Landing page sections
│   │   ├── 📁 constants/               # API endpoints, config, routes
│   │   ├── 📁 hooks/                   # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useSocket.js
│   │   │   └── useSwap.js
│   │   ├── 📁 pages/
│   │   │   ├── 📁 public/              # Landing, Login, Register, Explore
│   │   │   ├── 📁 private/             # Dashboard, Feed, Chat, Profile
│   │   │   ├── 📁 ai/                  # AI Match, Assistant, Roadmap
│   │   │   └── 📁 admin/              # Admin panel pages
│   │   ├── 📁 services/                # API service layer
│   │   ├── 📁 shared/components/
│   │   │   ├── 📁 feedback/            # Bug report, Contact support
│   │   │   └── 📁 legal/              # Privacy, Terms, Cookie banner
│   │   ├── 📁 store/                   # Redux Toolkit store + slices
│   │   ├── 📁 styles/                  # globals.css, variables.css, animations.css
│   │   └── 📁 utils/                   # Formatters, validators, helpers
│
├── 📁 server/                          # Node.js + Express Backend
│   ├── 📁 src/
│   │   ├── 📁 config/                  # DB, Cloudinary, OpenAI, Pinecone, Redis
│   │   ├── 📁 controllers/             # Route handler logic
│   │   ├── 📁 middleware/              # Auth, error, rate limit, validation
│   │   ├── 📁 models/                  # Mongoose schemas
│   │   │   ├── User.model.js
│   │   │   ├── Swap.model.js
│   │   │   ├── Chat.model.js
│   │   │   ├── Message.model.js
│   │   │   ├── Notification.model.js
│   │   │   └── Review.model.js
│   │   ├── 📁 routes/                  # Express route definitions
│   │   ├── 📁 services/                # Business logic services
│   │   │   ├── ai.service.js
│   │   │   ├── matching.service.js
│   │   │   ├── fraud.service.js
│   │   │   └── notification.service.js
│   │   ├── 📁 socket/                  # Socket.IO handlers
│   │   │   └── 📁 handlers/
│   │   │       ├── chat.handler.js
│   │   │       ├── notification.handler.js
│   │   │       └── swap.handler.js
│   │   └── 📁 utils/                   # ApiError, ApiResponse, asyncHandler
│
├── 📄 docker-compose.yml               # Docker multi-service setup
├── 📄 .env.example                     # Environment variable template
└── 📄 README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v20.x LTS or higher → [Download](https://nodejs.org/)
- **npm** v10+ or **yarn**
- **MongoDB Atlas** account → [Sign up](https://www.mongodb.com/cloud/atlas)
- **Docker Desktop** (optional, for containerized setup) → [Download](https://docker.com/)
- **Git** → [Download](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/Om101101/swapwise.git
cd swapwise
```

### 2. Setup Frontend (Client)

```bash
cd client
npm install
```

### 3. Setup Backend (Server)

```bash
cd ../server
npm install
```

### 4. Configure Environment Variables

```bash
# In the root directory
cp .env.example .env
# Fill in your values (see Environment Variables section below)
```

### 5. Run Development Servers

**Terminal 1 — Backend:**

```bash
cd server
npm run dev
```

**Terminal 2 — Frontend:**

```bash
cd client
npm run dev
```

**Or use Docker (recommended):**

```bash
docker-compose up --build
```

### 6. Access the Application

| Service          | URL                            |
| ---------------- | ------------------------------ |
| Frontend         | `http://localhost:5173`        |
| Backend API      | `http://localhost:5000/api/v1` |
| API Health Check | `http://localhost:5000/health` |

---

## 🔐 Environment Variables

Create a `.env` file in the root directory using `.env.example` as reference:

```env
# ─── Server ───────────────────────────────
PORT=5000
NODE_ENV=development

# ─── MongoDB ──────────────────────────────
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/swapwise

# ─── JWT ──────────────────────────────────
JWT_ACCESS_SECRET=your_access_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret
JWT_ACCESS_EXPIRES=15m
JWT_REFRESH_EXPIRES=7d

# ─── OpenAI ───────────────────────────────
OPENAI_API_KEY=sk-...

# ─── Pinecone ─────────────────────────────
PINECONE_API_KEY=your_pinecone_key
PINECONE_INDEX=swapwise-skills

# ─── Cloudinary ───────────────────────────
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# ─── Redis ────────────────────────────────
REDIS_URL=redis://localhost:6379

# ─── Email (Nodemailer) ───────────────────
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# ─── Sentry ───────────────────────────────
SENTRY_DSN=https://...@sentry.io/...

# ─── Client ───────────────────────────────
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_SOCKET_URL=http://localhost:5000
```

---

## 📦 Available Scripts

### Client (`/client`)

```bash
npm run dev          # Start Vite dev server (hot reload)
npm run build        # Production build
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

### Server (`/server`)

```bash
npm run dev          # Start with nodemon (auto-restart)
npm start            # Start production server
npm run lint         # Run ESLint
```

### Docker

```bash
docker-compose up --build     # Build and start all services
docker-compose up -d          # Run in detached mode
docker-compose down           # Stop all services
docker-compose logs -f        # View live logs
```

---

## 🔌 API Overview

Base URL: `http://localhost:5000/api/v1`

| Module        | Base Route       | Description                            |
| ------------- | ---------------- | -------------------------------------- |
| Auth          | `/auth`          | Register, Login, Refresh Token, Logout |
| Users         | `/users`         | Profile CRUD, image upload, search     |
| Swaps         | `/swaps`         | Create, accept, reject, history        |
| Chat          | `/chat`          | Conversations, messages, file upload   |
| AI            | `/ai`            | Match, recommend, analyze, generate    |
| Reviews       | `/reviews`       | Post and fetch reviews                 |
| Notifications | `/notifications` | Fetch and mark notifications           |
| Admin         | `/admin`         | User management, reports, analytics    |

---

## ⚡ Real-Time Features

Built with **Socket.IO**, the following events are handled in real-time:

| Event                          | Description                      |
| ------------------------------ | -------------------------------- |
| `message:send`                 | Send a chat message              |
| `message:received`             | Receive a chat message           |
| `swap:request`                 | New swap request notification    |
| `swap:accepted`                | Swap accepted notification       |
| `notification:new`             | Push a new notification          |
| `user:online`                  | Track user online/offline status |
| `typing:start` / `typing:stop` | Typing indicators                |

---

## 🏗️ DevOps & Deployment

### CI/CD Pipeline (GitHub Actions)

- Auto-lint and test on every push to `main`
- Auto-deploy frontend to **Vercel**
- Auto-deploy backend to **Render / AWS**

### Monitoring Stack

| Tool                   | Purpose                             |
| ---------------------- | ----------------------------------- |
| **Sentry**             | Error tracking (frontend + backend) |
| **Prometheus**         | Metrics collection                  |
| **Grafana**            | Metrics visualization dashboard     |
| **PostHog / Mixpanel** | Product analytics & user behavior   |

---

## 🎯 Pages Overview

| Page             | Route              | Access     |
| ---------------- | ------------------ | ---------- |
| Landing          | `/`                | Public     |
| Explore          | `/explore`         | Public     |
| Login            | `/login`           | Public     |
| Register         | `/register`        | Public     |
| Forgot Password  | `/forgot-password` | Public     |
| Dashboard        | `/dashboard`       | Private    |
| Feed             | `/feed`            | Private    |
| Onboarding       | `/onboarding`      | Private    |
| My Profile       | `/profile`         | Private    |
| Chat             | `/chat`            | Private    |
| Swap Requests    | `/swaps`           | Private    |
| Settings         | `/settings`        | Private    |
| AI Match         | `/ai/match`        | Private    |
| AI Assistant     | `/ai/assistant`    | Private    |
| Learning Roadmap | `/ai/roadmap`      | Private    |
| Admin Panel      | `/admin`           | Admin Only |

---

## 🖼️ Screenshots

> _(Screenshots will be added after UI completion)_

| Page           | Preview     |
| -------------- | ----------- |
| Landing Page   | Coming Soon |
| Dashboard      | Coming Soon |
| AI Skill Match | Coming Soon |
| Chat Interface | Coming Soon |

---

## 👨‍💻 Author

<div align="center">

**Om Jaiswal**

_Frontend Developer_

[![GitHub](https://img.shields.io/badge/GitHub-Om101101-181717?style=flat-square&logo=github)](https://github.com/Om101101)

🏛️ Era University, Lucknow  
📚 BCA — 3rd Year, 6th Semester  
🏢 Department of Computer Science

</div>

---

## 🙏 Acknowledgements

- **Dr. Simab Hasan Sir** — Project Guide, Department of Computer Science, Era University Lucknow — for his invaluable mentorship, guidance, and constant support throughout the development of this project.
- [OpenAI](https://openai.com/) — for the powerful GPT-4 and Embeddings API
- [Pinecone](https://pinecone.io/) — for vector database infrastructure
- [MongoDB Atlas](https://www.mongodb.com/) — for cloud database hosting
- [Radix UI](https://www.radix-ui.com/) — for accessible headless UI primitives
- [Framer Motion](https://www.framer.com/motion/) — for beautiful animations
- [GSAP](https://greensock.com/gsap/) — for advanced animation capabilities
- [Socket.IO](https://socket.io/) — for real-time communication
- [Cloudinary](https://cloudinary.com/) — for media management

---

<div align="center">

**⭐ If you find this project helpful, please give it a star!**

Made with ❤️ by Om Jaiswal | Era University Lucknow

_SwapWise — Learn More, Pay Nothing_

</div>

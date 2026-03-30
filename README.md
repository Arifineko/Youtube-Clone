<div align="center">
  <h1>📺 YouTube-Clone</h1>
</div>

## 🎯 Overview
This project goes beyond a simple UI replication. It is a comprehensive exploration of modern frontend architecture, leveraging **React 19**, **TypeScript**, and **TanStack Query** to interact with the real-time YouTube Data API v3. 

My primary focus was delivering a frictionless User Experience (UX) while maintaining scalable, type-safe, and highly performant code under the hood. By utilizing advanced caching techniques and rigorous typings, this application mirrors production-level standards.

## ✨ Key Features & Technical Achievements
- **Optimized Server-State & Quota Management:** Leveraged TanStack Query to implement aggressive caching strategies for trending categories and search result. This effectively reduced API quota consumption, ensuring application stability within strict rate limits

- **Type-Safe Data Orchestration:** Engineered a robust data layer to handle complex, deeply nested YouTube API responses. By architecting custom TypeScript Interfaces, I achieved 100% compile-time safety and enhanced Developer Experience through intelligent auto-completion, significantly reducing debugging time.

- **Seamless User Experience** Built to eliminate common UX pain points: skeleton loading states keep the layout stable while content loads, and an auto-collapsing sidebar ensures a consistent, distraction-free experience from mobile to ultra-wide displays.

## 🛠️ Tech Stack & Tooling

| Category | Technology | Architectural Rationale |
| :--- | :--- | :--- |
| **Core UI Framework** | React 19 | Leverages modern hooks and rendering capabilities for responsive interfaces. |
| **Static Typing** | TypeScript | Ensures structural type-safety at scale and eliminates runtime `undefined` errors. |
| **State Management** | TanStack React Query | Handles asynchronous server state, aggressive caching, and data synchronization. |
| **Styling Engine** | Tailwind CSS v4 | Utility-first CSS for rapid, consistent, and highly responsive design implementation. |
| **Routing** | React Router v7 | Manages complex client-side routing securely. |
| **Build & Tooling** | Vite, ESLint | Vite provides ultra-fast compilation; ESLint enforces strict code quality and best practices. |

## 📁 Organized Folder Structure
The `src/` directory is logically segregated to enforce separation of concerns and maintainability as the project scales:

```text
src/
├── assets/          # Static media (icons, SVGs, images)
├── components/      # Reusable UI components (Header, Sidebar, Skeletons)
├── context/         # React Context providers for global UI state
├── hooks/           # Custom React hooks encapsulating reusable logic
├── pages/           # Route-level components (Home, Watch, Results)
├── services/        # Axios API clients isolating network requests and endpoints
├── types/           # Global TypeScript interfaces and type definitions
├── utils/           # Helper functions and formatter utilities
├── App.tsx          # Root routing and Context provider composition
└── main.tsx         # Application entry point
```

## 🧠 Challenges & Solutions

Building a production-like clone with a strict third-party API introduced unique technical hurdles:

**1. API Quota Exhaustion During Rapid Development**
- **The Challenge:** The YouTube Data API has strict daily token limits. During continuous UI testing and hot-reloading, re-fetching data rapidly depleted the available quota.
- **The Solution:** I dove deep into caching mechanisms and implemented **TanStack Query** for robust server-state management. By configuring stale times and caching data locally during active sessions, I successfully eliminated redundant API calls. This drastically reduced token consumption without sacrificing the developer experience or the user's perception of real-time data.

**2. Taming Deeply Nested REST Responses**
- **The Challenge:** The JSON payloads from the YouTube API are notoriously nested and complex. Initially, navigating `response.data.items[0].snippet.thumbnails` led to frequent typos, runtime errors, and over-reliance on external documentation.
- **The Solution:** I systematically migrated the codebase to **TypeScript**. By meticulously defining interfaces for the API responses, I unlocked the full power of compiler Intellisense. This architectural shift immediately accelerated development velocity, neutralized object-access errors, and made the codebase inherently self-documenting.

## 🚀 Installation & Running

Follow these bulletproof instructions to spin up the local development environment:

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/youtube-clone.git
cd youtube-clone
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure Environment Variables**
Create a `.env` file in the root directory and securely inject your YouTube Data API key:
```env
VITE_API_KEY=your_youtube_api_key_here
```

**4. Spin up the development server**
```bash
npm run dev
```
*Application runs immediately at `http://localhost:5173`.*

## 🚀 What's Next: Roadmap & Enhancements
While I am extremely proud of the performance and architecture of this prototype, continuous improvement is the hallmark of a great engineer. My roadmap for refactoring and enhancement includes:

- [ ] **Unit Testing:** Integrate Vitest and React Testing Library to establish a robust test suite, ensuring UI component reliability and preventing regressions.



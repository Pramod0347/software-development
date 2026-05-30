# Fullstack Concept Lab

A comprehensive learning lab for mastering fullstack development concepts with multiple backend implementations, a modern React frontend, and in-depth topic explorations.

## Project Structure

```
fullstack-concept-lab/
├── backends/                          # Backend API implementations
│   ├── node-ts-api/                   # Node.js + TypeScript Express API
│   │   ├── src/
│   │   ├── tests/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── fastapi-api/                   # Python FastAPI backend
│       └── ...
│
├── frontend/                          # Frontend applications
│   └── react-app/                     # React application
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── ...
│
├── database/                          # Database learning materials
│   ├── schema-notes/                  # Database schema design notes
│   ├── seed-notes/                    # Data seeding strategies
│   ├── joins/                         # SQL JOIN patterns and examples
│   └── performance/                   # Query optimization & indexing
│
├── topics/                            # Deep-dive topic explorations
│   ├── 01-api-calls/                  # HTTP requests & API integration
│   ├── 02-tanstack-query/             # React Query (TanStack Query)
│   ├── 03-redux/                      # Redux state management
│   ├── 04-debounce-throttle/          # Performance optimization patterns
│   ├── 05-joins-pagination/           # Data fetching with pagination
│   ├── 06-expensive-queries-caching/  # Caching strategies
│   ├── 07-websocket/                  # Real-time communication
│   └── 08-auth-state/                 # Authentication & auth state
│
├── shared-notes/                      # Shared resources across topics
│   ├── interview-explanations/        # Interview-ready explanations
│   ├── mistakes-and-learnings/        # Common pitfalls & solutions
│   └── backend-comparison/            # Node.js vs FastAPI comparison
│
└── README.md                          # This file
```

## Backend APIs

### Node.js + TypeScript API
- **Location:** `backends/node-ts-api/`
- **Description:** Express.js API built with TypeScript
- **Start Dev Server:** `npm run dev`

### FastAPI
- **Location:** `backends/fastapi-api/`
- **Description:** Python FastAPI backend
- **Usage:** Coming soon

## Frontend

### React Application
- **Location:** `frontend/react-app/`
- **Description:** Modern React app integrating with backend APIs
- **Features:** State management, API calls, real-time updates, authentication

## Learning Topics

Each topic folder contains explanations, code examples, and best practices:

- **01 - API Calls:** Making HTTP requests from React
- **02 - TanStack Query:** Server state management with React Query
- **03 - Redux:** Client state management patterns
- **04 - Debounce & Throttle:** Performance optimization techniques
- **05 - Joins & Pagination:** Efficient data fetching strategies
- **06 - Expensive Queries & Caching:** Query optimization and caching patterns
- **07 - WebSocket:** Real-time bidirectional communication
- **08 - Auth State:** Authentication and authorization patterns

## Database

Learning materials organized by topic:
- **Schema Design:** Database structure and relationships
- **Seeding:** Sample data generation strategies
- **JOINs:** SQL join patterns and use cases
- **Performance:** Optimization techniques and indexing strategies

## 🎯 The 50-Day Curriculum

This project is structured around a **50-day comprehensive learning plan** organized into 4 phases:

- **Phase 1 (Days 1–14):** Foundation — API calls, state management basics
- **Phase 2 (Days 15–30):** State & App Flow — Auth, database fundamentals
- **Phase 3 (Days 31–42):** Real-time & Reliability — WebSockets, error handling
- **Phase 4 (Days 43–50):** Architecture Thinking — System design patterns

**→ See [CURRICULUM.md](CURRICULUM.md) for the full 50-day plan with daily breakdowns.**

### Daily Learning Routine

Each day (1–2 hours):
1. **Learn** (20–30 min): Study core concepts and key terms
2. **Build** (45–60 min): Implement a small demo or feature
3. **Reflect** (10 min): Document what you learned and questions

**Templates provided:**
- Daily log template: `shared-notes/daily-templates/DAILY_TEMPLATE.md`
- Topic template: `shared-notes/daily-templates/TOPIC_TEMPLATE.md`

## Getting Started

1. **Read** [CURRICULUM.md](CURRICULUM.md) to understand the 50-day plan
2. **Start Day 1:** Explore `topics/phase-1-foundation/01-api-calls/`
3. **Create a daily log:** Copy `DAILY_TEMPLATE.md` to `notes/daily-logs/day-01.md`
4. **Learn & Build:** Follow the 20-45-10 minute structure
5. **Use templates:** `TOPIC_TEMPLATE.md` helps structure each topic folder

## Tech Stack

- **Frontend:** React, TanStack Query, Redux
- **Backends:** Node.js/TypeScript (Express), Python (FastAPI)
- **Database:** SQL (schema design, optimization)
- **Real-time:** WebSocket

## Notes

- See `shared-notes/interview-explanations/` for concise, interview-ready explanations
- Check `shared-notes/mistakes-and-learnings/` for common pitfalls
- Compare backend implementations in `shared-notes/backend-comparison/`
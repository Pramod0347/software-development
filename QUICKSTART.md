# 🚀 Quick Start Guide

Get started with the 50-day learning curriculum in 5 minutes.

---

## Step 1: Understand the Plan (2 min)

- **Read:** [CURRICULUM.md](CURRICULUM.md) — Overview of all 50 days across 4 phases
- **Key:** 25 topics, 2 days each, 50 total days
- **Daily:** 1–2 hours (Learn 20-30 min → Build 45-60 min → Reflect 10 min)

---

## Step 2: Start Today (Day 1)

### A. Create Your Daily Log

Copy the template and name it with the day number:

```bash
cp shared-notes/daily-templates/DAILY_TEMPLATE.md notes/daily-logs/day-01.md
```

Then fill it in as you work through the day.

### B. Pick Your Topic

**Today's topic:** Phase 1, Days 1–2 → **API Calls**

Navigate to: `topics/phase-1-foundation/01-api-calls/`

### C. Review the Topic

The topic folder should contain:
- Explanation of the concept
- Code examples
- Common pitfalls
- Demo projects

**Use the template:** Copy `shared-notes/daily-templates/TOPIC_TEMPLATE.md` into the topic folder as a structure guide.

### D. Follow the Daily Routine

#### Learn (20–30 min)
- Read the topic notes
- Understand key concepts
- Learn key terms
- Take quick notes

#### Build (45–60 min)
- Create a small demo
- Implement the concept
- Get it working in your frontend + backend
- Document what you built

#### Reflect (10 min)
- Write down what you understood
- List open questions
- Note gotchas or workarounds
- Plan tomorrow's focus

---

## Step 3: Update Your Progress

After completing Day 1–2 (API Calls):

1. Open [PROGRESS.md](PROGRESS.md)
2. Update the API Calls row: `⬜` → `✅`
3. Update the progress bar

---

## Step 4: Repeat for Days 3–50

Each 2-day topic follows the same pattern:
1. Create daily log
2. Find the topic folder
3. Learn → Build → Reflect
4. Update progress

---

## 📂 Key Files & Folders

| What | Where | Why |
|------|-------|-----|
| Full curriculum | [CURRICULUM.md](CURRICULUM.md) | Reference the entire 50-day plan |
| Progress tracker | [PROGRESS.md](PROGRESS.md) | Check what you've completed |
| Daily template | [shared-notes/daily-templates/DAILY_TEMPLATE.md](shared-notes/daily-templates/DAILY_TEMPLATE.md) | Copy for each day |
| Topic template | [shared-notes/daily-templates/TOPIC_TEMPLATE.md](shared-notes/daily-templates/TOPIC_TEMPLATE.md) | Use to structure topics |
| Your daily logs | [notes/daily-logs/](notes/daily-logs/) | Store day-01.md, day-02.md, etc. |
| Phase 1 topics | [topics/phase-1-foundation/](topics/phase-1-foundation/) | Days 1–14 |
| Phase 2 topics | [topics/phase-2-state-and-app-flow/](topics/phase-2-state-and-app-flow/) | Days 15–30 |
| Phase 3 topics | [topics/phase-3-realtime-reliability/](topics/phase-3-realtime-reliability/) | Days 31–42 |
| Phase 4 topics | [topics/phase-4-architecture-thinking/](topics/phase-4-architecture-thinking/) | Days 43–50 |

---

## 💻 Running the Stack

### Start the Backend (Node.js/TypeScript)
```bash
cd backends/node-ts-api
npm install
npm run dev
```

### Start the Frontend (React)
```bash
cd frontend/react-app
npm install
npm start
```

### Backend (FastAPI) — Optional
```bash
cd backends/fastapi-api
# Setup and run
```

---

## 📝 Example: Day 1 Log

```markdown
# Daily Learning Log — Day 1

**Date:** May 30, 2026
**Topic:** API Calls
**Phase:** Phase 1 — Foundation

## 1️⃣ Learn (20–30 min)

### Key Concepts
- HTTP requests (GET, POST, PUT, DELETE)
- Loading states in React
- Error handling

### Key Terms
- **Fetch API:** Browser API for HTTP requests
- **Axios:** Promise-based HTTP client
- **Status Codes:** 200 (success), 404 (not found), 500 (error)

## 2️⃣ Build (45–60 min)

### What I Built
Created a React component that fetches user data from an API endpoint

### Code Location
- Frontend: `frontend/react-app/src/components/UserList.jsx`
- Backend: `backends/node-ts-api/src/routes/users.ts`

### Key Implementation Details
- Used axios for HTTP requests
- Implemented loading state with conditional rendering
- Added error handling with try-catch

## 3️⃣ Reflect (10 min)

### What I Understood ✅
- How to make API calls from React
- Managing loading and error states
- Async/await pattern

### Open Questions ❓
- How to cancel requests if component unmounts?
- Best way to handle timeout?

### Aha Moments 💡
- You need loading states to prevent multiple simultaneous requests

### Tomorrow's Focus
- Learn about request cancellation
- Explore TanStack Query for better state management
```

---

## ✅ You're Ready!

1. ✅ You understand the curriculum structure
2. ✅ You know the daily routine
3. ✅ You have templates to use
4. ✅ You know where to find topics
5. ✅ You can track progress

**→ Start with [Day 1: API Calls](topics/phase-1-foundation/01-api-calls/)**

Good luck! 🎯

# 🎯 50-Day Full-Stack Learning Curriculum

Complete structured path from foundation to architecture thinking.
- **Duration:** 50 days
- **Daily Commitment:** 1–2 hours (20-30 min learn → 45-60 min build → 10 min reflect)
- **Approach:** Learn → Implement → Reflect

---

## 📅 Phase 1: Foundation (Days 1–14)

**Goal:** Build a strong front-end data flow foundation with core concepts.

| Days | Topic | Status |
|------|-------|--------|
| 1–2 | **API Calls** • loading/error states | ⬜ |
| 3–4 | **TanStack Query** (server state + caching basics) | ⬜ |
| 5–6 | **Debounce & Throttle** | ⬜ |
| 7–8 | **Pagination & Virtual Scrolling / Infinite Scroll** | ⬜ |
| 9–10 | **Filtering & Sorting** | ⬜ |
| 11–12 | **Forms & Validation** | ⬜ |
| 13–14 | **File Uploads & Progress Indicators** | ⬜ |

**Phase 1 Topics:** `topics/phase-1-foundation/`

---

## 📅 Phase 2: State + App Flow (Days 15–30)

**Goal:** Master state management, authentication, and data layer fundamentals.

| Days | Topic | Status |
|------|-------|--------|
| 15–16 | **Redux Toolkit** (when and why) | ⬜ |
| 17–18 | **Authentication Flow** (JWT + refresh + protected routes) | ⬜ |
| 19–20 | **Role-Based Access Control (RBAC)** | ⬜ |
| 21–22 | **SQL Joins** (INNER, LEFT) • Normalization vs Denormalization | ⬜ |
| 23–24 | **N+1 Query Problem** | ⬜ |
| 25–26 | **Expensive Queries & Indexing Basics** | ⬜ |
| 27–28 | **Database Transactions & ACID** | ⬜ |
| 29–30 | **Caching** (Redis concept + API-level) • Connection Pooling | ⬜ |

**Phase 2 Topics:** `topics/phase-2-state-and-app-flow/`

---

## 📅 Phase 3: Real-time + Reliability (Days 31–42)

**Goal:** Handle real-time communication, error handling, and API protection.

| Days | Topic | Status |
|------|-------|--------|
| 31–32 | **WebSockets** | ⬜ |
| 33–34 | **SSE (Server-Sent Events)** • When to use SSE vs WebSockets | ⬜ |
| 35–36 | **Optimistic UI Updates** | ⬜ |
| 37–38 | **Error Handling & Retry** • Resilience • Circuit Breaker Pattern | ⬜ |
| 39–40 | **Rate Limiting & API Protection** | ⬜ |
| 41–42 | **API Versioning** | ⬜ |

**Phase 3 Topics:** `topics/phase-3-realtime-reliability/`

---

## 📅 Phase 4: Architecture Thinking (Days 43–50)

**Goal:** Understand system design patterns and architectural decisions.

| Days | Topic | Status |
|------|-------|--------|
| 43–44 | **Event-Driven Architecture** (basics) | ⬜ |
| 45–46 | **Microservices Communication** (basics) | ⬜ |
| 47–48 | **API Gateway Pattern** | ⬜ |
| 49–50 | **Monorepo vs Multi-repo** • Tradeoffs | ⬜ |

**Phase 4 Topics:** `topics/phase-4-architecture-thinking/`

---

## 📋 Daily Log

Your daily learning logs are in: `notes/daily-logs/`

**Template:** See `shared-notes/daily-templates/DAILY_TEMPLATE.md`

---

## 📂 Folder Structure

```
fullstack-concept-lab/
├── topics/
│   ├── phase-1-foundation/              # Days 1–14
│   ├── phase-2-state-and-app-flow/      # Days 15–30
│   ├── phase-3-realtime-reliability/    # Days 31–42
│   └── phase-4-architecture-thinking/   # Days 43–50
│
├── notes/
│   └── daily-logs/                      # Day-by-day learning logs
│
├── shared-notes/
│   ├── daily-templates/
│   │   ├── DAILY_TEMPLATE.md            # Copy for each day
│   │   └── TOPIC_TEMPLATE.md            # Use for each topic
│   ├── interview-explanations/
│   ├── mistakes-and-learnings/
│   └── backend-comparison/
│
├── backends/                            # Two implementations
│   ├── node-ts-api/
│   └── fastapi-api/
│
├── frontend/
│   └── react-app/
│
├── database/
│   ├── schema-notes/
│   ├── seed-notes/
│   ├── joins/
│   └── performance/
│
└── CURRICULUM.md                        # This file
```

---

## 🎓 How to Use This Curriculum

### Daily Routine
1. **Learn** (20–30 min): Read topic notes, watch videos, understand core concepts
2. **Build** (45–60 min): Implement a tiny demo or feature
3. **Reflect** (10 min): Document what you learned + open questions

### Tracking Progress
- Copy `DAILY_TEMPLATE.md` to `notes/daily-logs/day-01.md`, `day-02.md`, etc.
- Update the status column in this file as you complete topics
- Link your daily logs to the corresponding topic folder

### When Stuck
- Check `shared-notes/mistakes-and-learnings/` for common pitfalls
- Review `shared-notes/interview-explanations/` for concise explanations
- Use `TOPIC_TEMPLATE.md` to structure your topic exploration

---

## 🔧 What's Different vs Original Plan

| Added/Modified | Where | Why |
|---|---|---|
| Virtual scrolling / Infinite scroll | Phase 1, Days 7–8 | Natural companion to pagination |
| File uploads + progress indicators | Phase 1, Days 13–14 | Common real-world frontend task |
| Role-based access control (RBAC) | Phase 2, Days 19–20 | Auth feels incomplete without it |
| Normalization vs Denormalization | Phase 2, Days 21–22 | Rounds out joins + indexing thinking |
| SSE (Server-Sent Events) | Phase 3, Days 33–34 | Lighter WebSocket alternative, often asked |
| Circuit breaker pattern | Phase 3, Days 37–38 | Natural extension of retry/resilience |
| API Gateway pattern | Phase 4, Days 47–48 | Bridges microservices + rate limiting |
| Monorepo vs Multi-repo | Phase 4, Days 49–50 | Common architecture discussion in interviews |

---

## 🚀 Getting Started

1. **Pick Day 1:** Start with **API Calls** in `topics/phase-1-foundation/01-api-calls/`
2. **Create Daily Log:** Copy `DAILY_TEMPLATE.md` to `notes/daily-logs/day-01.md`
3. **Learn & Build:** Follow the daily template structure
4. **Review:** Check `TOPIC_TEMPLATE.md` for structure guidance

---

## 💡 Tips

- **Keep it lightweight:** You don't need to build a perfect production app each day
- **Iterate:** If a topic feels incomplete, revisit it the next day or cycle
- **Connect:** Link topics together in your notes
- **Compare:** Use `shared-notes/backend-comparison/` to understand both Node.js and Python approaches
- **Interview prep:** Your daily logs become raw material for interview explanations

---

## Progress Summary

**Total Topics:** 25
**Total Days:** 50
**Average per Topic:** 2 days

Mark topics as ✅ (complete), 🟡 (in progress), or ⬜ (not started) above.

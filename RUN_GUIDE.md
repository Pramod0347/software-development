# 🚀 How to Run This Repository

Complete guide to set up and run the fullstack application with Node.js or Python backends.

---

## 📋 Prerequisites

Make sure you have installed:
- **Node.js** (v16+) and npm
- **Python** (v3.8+) and pip
- **Git**

Check versions:
```bash
node --version
npm --version
python --version
pip --version
```

---

## 🏗️ Project Structure Overview

```
fullstack-concept-lab/
├── backends/
│   ├── node-ts-api/          ← Node.js + Express + TypeScript
│   └── fastapi-api/          ← Python + FastAPI
├── frontend/
│   └── react-app/            ← React application
└── database/
    └── [learning materials]
```

---

## 🎯 Quick Start (3 Terminal Windows)

### Terminal 1: Run Node.js Backend
```bash
cd backends/node-ts-api
npm install
npm run dev
# Server runs on http://localhost:3000
```

### Terminal 2: Run React Frontend
```bash
cd frontend/react-app
npm install
npm start
# App runs on http://localhost:3000 or http://localhost:5173
```

### Terminal 3: Run Python Backend (when switching)
```bash
cd backends/fastapi-api
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install fastapi uvicorn
python -m uvicorn app.main:app --reload
# API runs on http://localhost:8000
```

---

## 📦 Detailed Setup Instructions

### Option A: Node.js Backend (Recommended for Start)

#### 1. Install Dependencies
```bash
cd backends/node-ts-api
npm install
```

This installs:
- **Express** - Web framework
- **TypeScript** - Type safety
- **CORS** - Cross-origin requests
- **ts-node-dev** - Auto-reload dev server

#### 2. Start Development Server
```bash
npm run dev
```

**Output:**
```
Server running on http://localhost:3000
```

**What this does:**
- Runs TypeScript code with auto-reload
- Watches for file changes
- Hot reloads on save

**Stop:** Press `Ctrl + C`

---

### Option B: Python Backend (FastAPI)

#### 1. Create Virtual Environment
```bash
cd backends/fastapi-api

# Create virtual environment
python -m venv venv

# Activate it
source venv/bin/activate          # macOS/Linux
# OR
venv\Scripts\activate             # Windows
```

#### 2. Install Dependencies
```bash
pip install fastapi uvicorn
```

**What gets installed:**
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server (like Express for Python)

#### 3. Start Development Server
```bash
python -m uvicorn app.main:app --reload
```

**Output:**
```
Uvicorn running on http://127.0.0.1:8000
```

**Features:**
- Auto-reload on file changes
- Interactive API docs at `http://localhost:8000/docs`
- Hot reload on save

**Stop:** Press `Ctrl + C`

---

### React Frontend

#### 1. Install Dependencies
```bash
cd frontend/react-app
npm install
```

#### 2. Start Development Server
```bash
npm start
# OR (if using Vite)
npm run dev
```

**Output:**
```
Running on http://localhost:3000
```

Or (Vite):
```
Running on http://localhost:5173
```

**Stop:** Press `Ctrl + C`

---

## 🔄 How to Switch Between Backends

### Switch to Node.js Backend

**Step 1:** Stop any running Python server
```bash
# In the Python terminal
Ctrl + C
```

**Step 2:** Update React API endpoint
```javascript
// In frontend/react-app/src/services/api.ts or similar

// Change from:
const API_BASE = 'http://localhost:8000'  // FastAPI

// To:
const API_BASE = 'http://localhost:3000'  // Node.js Express
```

**Step 3:** Restart Node.js backend (if not running)
```bash
cd backends/node-ts-api
npm run dev
```

**Step 4:** Restart React app
```bash
# If React app is running, restart it or just refresh the browser
```

---

### Switch to Python Backend

**Step 1:** Stop Node.js backend
```bash
# In the Node.js terminal
Ctrl + C
```

**Step 2:** Update React API endpoint
```javascript
// In frontend/react-app/src/services/api.ts or similar

// Change from:
const API_BASE = 'http://localhost:3000'  // Node.js

// To:
const API_BASE = 'http://localhost:8000'  // FastAPI
```

**Step 3:** Start FastAPI backend
```bash
cd backends/fastapi-api
source venv/bin/activate  # or venv\Scripts\activate on Windows
python -m uvicorn app.main:app --reload
```

**Step 4:** Restart React app
```bash
# Refresh the browser or restart: npm start
```

---

## 🏃 Running All 3 at Once (Recommended)

Open 3 terminals side-by-side:

**Terminal 1 - Node.js Backend:**
```bash
cd fullstack-concept-lab/backends/node-ts-api
npm install  # Only first time
npm run dev
```

**Terminal 2 - React Frontend:**
```bash
cd fullstack-concept-lab/frontend/react-app
npm install  # Only first time
npm start
```

**Terminal 3 - Python Backend (Optional):**
```bash
cd fullstack-concept-lab/backends/fastapi-api
python -m venv venv
source venv/bin/activate
pip install fastapi uvicorn
python -m uvicorn app.main:app --reload
```

---

## 📡 API Endpoints

### Node.js Express (Port 3000)
- Base URL: `http://localhost:3000`
- Example endpoints:
  - `GET /api/health` - Health check
  - `GET /api/users` - Get users
  - `POST /api/users` - Create user

### Python FastAPI (Port 8000)
- Base URL: `http://localhost:8000`
- Interactive docs: `http://localhost:8000/docs`
- Example endpoints:
  - `GET /api/health` - Health check
  - `GET /api/users` - Get users
  - `POST /api/users` - Create user

### React Frontend (Port 3000 or 5173)
- Open: `http://localhost:3000` or `http://localhost:5173`

---

## ✅ Verification Checklist

### Node.js Backend Working?
```bash
curl http://localhost:3000/api/health
# Should return: 200 OK or similar
```

### Python Backend Working?
```bash
curl http://localhost:8000/docs
# Should open interactive API docs
```

### React Frontend Working?
- Open `http://localhost:3000` in browser
- Should see React app interface

### All Connected?
- Check browser console (F12) for API errors
- Check backend terminal for incoming requests

---

## 🐛 Troubleshooting

### Port Already in Use

**Problem:** `Error: listen EADDRINUSE: address already in use :::3000`

**Solution:**
```bash
# Find and kill process on port 3000
# macOS/Linux:
lsof -i :3000
kill -9 <PID>

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Node Modules Not Installing

**Problem:** `npm install` fails

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Python Virtual Environment Issue

**Problem:** `python: command not found` or venv not activating

**Solution:**
```bash
# Reinstall Python or use python3:
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn
```

### CORS Error in Browser

**Problem:** `Access to XMLHttpRequest has been blocked by CORS policy`

**Solution:**
- Ensure backend is running
- Check API_BASE URL in React code matches running backend
- Verify CORS is enabled in backend

**Node.js (already configured):**
```typescript
app.use(cors());
```

**FastAPI (add if needed):**
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Module Not Found

**Problem:** `Cannot find module 'express'`

**Solution:**
```bash
cd backends/node-ts-api
npm install
```

---

## 🔗 Development Workflow

1. **Make a change** in your code
2. **Backend auto-reloads** (ts-node-dev or uvicorn --reload)
3. **Frontend auto-reloads** (React dev server or Vite)
4. **Test in browser** - Changes appear instantly

No need to manually restart anything (usually)!

---

---

## 🔄 BACKEND SWITCHING GUIDE

### Quick Switch (30 Seconds)

#### From Node.js to Python

**Step 1:** Update frontend API URL
```javascript
// File: frontend/react-app/src/services/api.ts (or similar)

// OLD (Node.js):
const API_BASE = 'http://localhost:3000'

// NEW (FastAPI):
const API_BASE = 'http://localhost:8000'
```

**Step 2:** Stop Node.js backend
```bash
# In Terminal 1 (where Node runs)
Ctrl + C
```

**Step 3:** Start Python backend
```bash
# Terminal 1
cd backends/fastapi-api
source venv/bin/activate
python -m uvicorn app.main:app --reload
```

**Step 4:** Refresh browser
```
Press F5 or Cmd+R
```

✅ **Done!** Now using Python backend.

---

#### From Python to Node.js

**Step 1:** Update frontend API URL
```javascript
// File: frontend/react-app/src/services/api.ts (or similar)

// OLD (FastAPI):
const API_BASE = 'http://localhost:8000'

// NEW (Node.js):
const API_BASE = 'http://localhost:3000'
```

**Step 2:** Stop Python backend
```bash
# Terminal where Python runs
Ctrl + C
```

**Step 3:** Start Node.js backend
```bash
cd backends/node-ts-api
npm run dev
```

**Step 4:** Refresh browser
```
Press F5 or Cmd+R
```

✅ **Done!** Now using Node.js backend.

---

### Running Both Simultaneously

If you want to test BOTH backends at the same time:

**Terminal 1 - Node.js (Port 3000):**
```bash
cd backends/node-ts-api
npm run dev
```

**Terminal 2 - Python (Port 8000):**
```bash
cd backends/fastapi-api
source venv/bin/activate
python -m uvicorn app.main:app --reload
```

**Terminal 3 - React Frontend:**
```bash
cd frontend/react-app
npm start
```

Then in your frontend code, call either:
- `http://localhost:3000` for Node.js
- `http://localhost:8000` for Python

**Use this to:**
- Compare how both backends handle same endpoint
- Test which performs better
- Learn differences in implementation

---

### Backend Comparison

| Feature | Node.js + Express | Python + FastAPI |
|---------|-------------------|------------------|
| **Port** | 3000 | 8000 |
| **Language** | TypeScript | Python |
| **Framework** | Express.js | FastAPI |
| **Setup Time** | ~2 minutes | ~3 minutes |
| **Hot Reload** | Yes | Yes |
| **API Docs** | Manual | Auto-generated at `/docs` |
| **Performance** | Very fast | Very fast |
| **Learning Curve** | JavaScript/TypeScript | Python |

---

### Where to Update the API URL

Your frontend code needs to know which backend to call. Find the API URL in your React app:

**Common locations:**
- `frontend/react-app/src/services/api.ts`
- `frontend/react-app/src/config.ts`
- `frontend/react-app/src/constants.ts`
- Or search for `localhost:3000` or `localhost:8000`

**Example code to update:**
```javascript
// Before (Node.js)
const API_BASE = 'http://localhost:3000'
const response = await fetch(`${API_BASE}/api/users`)

// After (Python)
const API_BASE = 'http://localhost:8000'
const response = await fetch(`${API_BASE}/api/users`)
```

---

### Advanced: Using Environment Variables

Create a `.env` file to switch backends easily:

**.env** (Node.js)
```
REACT_APP_API_URL=http://localhost:3000
```

**.env** (Python)
```
REACT_APP_API_URL=http://localhost:8000
```

Then in your code:
```javascript
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:3000'
```

When you change `.env`, restart React: `npm start`

---

### Testing Both Backends

Use this pattern to switch backends at runtime:

```javascript
// src/config.ts
export enum Backend {
  NODE = 'http://localhost:3000',
  PYTHON = 'http://localhost:8000'
}

let API_BASE = Backend.NODE

export const getAPI = () => API_BASE
export const setBackend = (backend: Backend) => {
  API_BASE = backend
  console.log(`Switched to: ${backend}`)
  window.location.reload() // Reload page
}
```

Then create a button to switch:
```javascript
import { setBackend, Backend } from './config'

export function BackendSelector() {
  return (
    <>
      <button onClick={() => setBackend(Backend.NODE)}>
        Use Node.js Backend
      </button>
      <button onClick={() => setBackend(Backend.PYTHON)}>
        Use Python Backend
      </button>
    </>
  )
}
```

---

## 📚 Next Steps

1. ✅ Run the fullstack app
2. ✅ Test API endpoints in browser/Postman
3. 🔄 Try switching between backends
4. 📖 Start learning from [CURRICULUM.md](CURRICULUM.md)
5. 💻 Build features in the `topics/` directories

---

## 💡 Tips

- **Keep terminals open:** Run frontend + backend side by side
- **Use Postman:** Test API endpoints more easily
- **Check browser DevTools:** F12 to see network requests
- **Read backend logs:** See what API calls come in
- **Hot reload:** Code changes apply without restarting (usually)
- **API Docs:** FastAPI has built-in docs at `/docs` 📖
- **Refresh page (F5):** Always refresh after switching backends
- **Check console:** Both browser AND terminal for errors

---

## ✅ Verification Checklist

**For Node.js Backend:**
```bash
curl http://localhost:3000
# Should return response (not timeout)
```

**For Python Backend:**
```bash
curl http://localhost:8000/docs
# Should show FastAPI Swagger UI
```

**For React Frontend:**
- Open `http://localhost:3000` in browser
- Check browser console (F12) - no API errors?
- Check backend terminal - see incoming requests?

---

## 🆘 Common Issues When Switching

**Problem:** Old backend still being called
- **Fix:** Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- **Fix:** Clear browser cache
- **Fix:** Restart React: `Ctrl+C` then `npm start`

**Problem:** Backend endpoint works in Postman but not React
- **Fix:** Check API URL in code matches running backend
- **Fix:** Check browser DevTools Network tab
- **Fix:** Verify CORS is enabled in backend

**Problem:** Port already in use
- **Fix:** Kill process: `lsof -i :3000` then `kill -9 <PID>` (macOS/Linux)
- **Fix:** Or use different port: `npm run dev -- --port 3001`

**Problem:** React can't connect to backend
- **Fix:** Make sure BOTH frontend and backend are running
- **Fix:** Check they're on correct ports (3000 vs 8000)
- **Fix:** Check API_BASE URL in code

---

## 🆘 Need Help?

- Check the troubleshooting sections above
- View backend logs in the terminal
- Check browser console (F12) for frontend errors
- Verify both frontend and backend are running on correct ports
- Search for `API_BASE` or `localhost` in your code

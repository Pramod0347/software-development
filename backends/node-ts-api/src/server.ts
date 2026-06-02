import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

// Middleware
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'Node.js Express API is running',
    timestamp: new Date().toISOString(),
    backend: 'Node.js + Express + TypeScript'
  })
})

// Sample endpoints
app.get('/api/users', (req: Request, res: Response) => {
  res.json({
    users: [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' }
    ]
  })
})

app.post('/api/users', (req: Request, res: Response) => {
  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' })
  }

  res.status(201).json({
    id: Math.floor(Math.random() * 1000),
    name,
    email,
    createdAt: new Date().toISOString()
  })
})

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to Fullstack Learning Curriculum API',
    backend: 'Node.js + Express + TypeScript',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      users: '/api/users (GET, POST)'
    }
  })
})

// Error handling
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' })
})

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`)
  console.log(`📡 API Health: http://localhost:${PORT}/api/health`)
  console.log(`👥 Users: http://localhost:${PORT}/api/users`)
})

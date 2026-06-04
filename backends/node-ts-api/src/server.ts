import express, { Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './routes/users'

const app = express()
const PORT = 3000

// Middleware
app.use(cors())
app.use(express.json())

app.use('/api/users', usersRouter)

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'Node.js Express API is running',
    timestamp: new Date().toISOString(),
    backend: 'Node.js + Express + TypeScript'
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

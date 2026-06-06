import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_BASE = 'http://localhost:3000'

const topics = {
  'Phase 1: Foundation': [
    { id: 1, name: 'API Calls + TanStack Query', days: '1-4', path: '/api-calls' },
    { id: 3, name: 'Debounce & Throttle + Pagination + Filtering & Sorting', days: '5-10', path: '/product-search' },
    { id: 6, name: 'Forms & Validation', days: '11-12', path: '/forms' },
    { id: 7, name: 'File Uploads & Progress', days: '13-14', path: '/file-uploads' },
  ],
  'Phase 2: State & App Flow': [
    { id: 8, name: 'Redux Toolkit', days: '15-16', path: '/redux' },
    { id: 9, name: 'Authentication & JWT', days: '17-18', path: '/authentication' },
    { id: 10, name: 'RBAC', days: '19-20', path: '/rbac' },
    { id: 11, name: 'SQL Joins & Normalization', days: '21-22', path: '/sql-joins' },
    { id: 12, name: 'N+1 Query Problem', days: '23-24', path: '/n-plus-1' },
    { id: 13, name: 'Expensive Queries & Indexing', days: '25-26', path: '/expensive-queries' },
    { id: 14, name: 'Transactions & ACID', days: '27-28', path: '/transactions' },
    { id: 15, name: 'Caching & Connection Pooling', days: '29-30', path: '/caching' },
  ],
  'Phase 3: Real-time & Reliability': [
    { id: 16, name: 'WebSockets', days: '31-32', path: '/websockets' },
    { id: 17, name: 'Server-Sent Events', days: '33-34', path: '/sse' },
    { id: 18, name: 'Optimistic UI Updates', days: '35-36', path: '/optimistic-ui' },
    { id: 19, name: 'Error Handling & Resilience', days: '37-38', path: '/error-handling' },
    { id: 20, name: 'Rate Limiting', days: '39-40', path: '/rate-limiting' },
    { id: 21, name: 'API Versioning', days: '41-42', path: '/api-versioning' },
  ],
  'Phase 4: Architecture Thinking': [
    { id: 22, name: 'Event-Driven Architecture', days: '43-44', path: '/event-driven' },
    { id: 23, name: 'Microservices', days: '45-46', path: '/microservices' },
    { id: 24, name: 'API Gateway Pattern', days: '47-48', path: '/api-gateway' },
    { id: 25, name: 'Monorepo vs Multi-repo', days: '49-50', path: '/monorepo' },
  ],
}

const Homepage = () => {
  const [apiStatus, setApiStatus] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    checkAPIStatus()
  }, [])

  const checkAPIStatus = async () => {
    try {
      const response = await axios.get(`${API_BASE}/api/health`)
      const backend = response.data.backend || 'Node.js + Express'
      setApiStatus({
        status: 'connected',
        backend: backend.includes('Node') ? 'Node.js' : 'Python',
        port: 3000
      })
      setError(null)
    } catch (err) {
      try {
        await axios.get('http://localhost:8000/api/health')
        setApiStatus({
          status: 'connected',
          backend: 'Python',
          port: 8000
        })
      } catch {
        setApiStatus({ status: 'disconnected' })
        setError('Backend API is not running')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">🚀 Fullstack Learning Curriculum</h1>
            <p className="text-gray-600 mt-1">50-Day Complete Learning Path</p>
          </div>
          <div className="flex items-center gap-4">
            {/* Backend Status */}
            <div className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 ${
              apiStatus?.status === 'connected'
                ? 'bg-green-50 border-green-300'
                : 'bg-red-50 border-red-300'
            }`}>
              <span className={`w-3 h-3 rounded-full ${
                apiStatus?.status === 'connected'
                  ? 'bg-green-500 animate-pulse'
                  : 'bg-red-500'
              }`}></span>
              <div>
                <p className="text-sm font-bold text-gray-800">
                  {apiStatus?.backend || 'Offline'}
                </p>
                <p className="text-xs text-gray-600">
                  {apiStatus?.status === 'connected' ? `Port ${apiStatus?.port}` : 'Not Connected'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-800 font-semibold">⚠️ {error}</p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-semibold mb-2">Total Days</p>
            <p className="text-3xl font-bold text-blue-600">50</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-semibold mb-2">Total Topics</p>
            <p className="text-3xl font-bold text-purple-600">25</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-semibold mb-2">Phases</p>
            <p className="text-3xl font-bold text-orange-600">4</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-semibold mb-2">Daily Time</p>
            <p className="text-3xl font-bold text-green-600">1-2h</p>
          </div>
        </div>

        {/* Topics by Phase */}
        <div className="space-y-8">
          {Object.entries(topics).map(([ phase, phaseTopics ], phaseIndex) => (
            <section key={phase} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  {phaseIndex + 1}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{phase}</h2>
                <span className="ml-auto text-gray-600 text-sm font-semibold bg-gray-100 px-3 py-1 rounded-full">
                  {phaseTopics.length} topics
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {phaseTopics.map((topic) => (
                  <div
                    key={topic.id}
                    onClick={() => navigate(topic.path)}
                    className="p-4 bg-linear-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                        Day {topic.days}
                      </span>
                      <span className="text-gray-400 group-hover:text-blue-600">→</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600">
                      {topic.name}
                    </h3>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Homepage
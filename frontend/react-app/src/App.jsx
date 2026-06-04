import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import ApiCallsPage from './components/ApiCallsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/api-calls" element={<ApiCallsPage />} />
    </Routes>
  )
}

export default App

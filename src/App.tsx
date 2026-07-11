import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Catalog } from './pages/Catalog'
import { InterviewJason } from './pages/InterviewJason'
import './index.css'

// Vite BASE_URL ends with / (e.g. /lbd/interview/ when embedded under the portfolio).
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<InterviewJason />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
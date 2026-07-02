import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Catalog } from './pages/Catalog'
import { InterviewJason } from './pages/InterviewJason'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InterviewJason />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirigir la raíz (/) directamente a la pantalla de login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Nuestra nueva ruta de Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
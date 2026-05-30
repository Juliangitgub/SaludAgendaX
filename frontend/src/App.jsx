import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirigir la raíz (/) directamente a la pantalla de login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Rustas de autenticacion */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App;
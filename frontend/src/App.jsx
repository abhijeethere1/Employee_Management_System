import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

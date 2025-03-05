import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminSignUp from './pages/AdminSignUp'
import CustomerSignUp from './pages/CustomerSignUp'
import Login from './pages/Login'
import NotFound from './components/NotFound';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './ProtectedRoute'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin-signup' element={<AdminSignUp />} />
      <Route path='/admin-login' element={<Login />} />
      <Route path='/customer-signup' element={<CustomerSignUp />} />

      <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
      </Route>

      {/* Default Route */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AllRoutes;

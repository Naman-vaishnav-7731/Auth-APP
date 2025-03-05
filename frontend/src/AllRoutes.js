import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminSignUp from './pages/AdminSignUp'
import CustomerSignUp from './pages/CustomerSignUp'
import Login from './pages/Login'
import NotFound from './components/NotFound'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin-signup' element={<AdminSignUp />} />
      <Route path='/admin-login' element={<Login />} />
      <Route path='/customer-signup' element={<CustomerSignUp />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AllRoutes;

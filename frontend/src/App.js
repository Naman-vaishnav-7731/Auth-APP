import AllRoutes from './AllRoutes'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App;

import {Outlet} from 'react-router-dom'
import Footer from './pages/footer/footer';
import Navbar from './pages/navbar/navbar';

function App() {
  return (
  <>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
  )
}

export default App;
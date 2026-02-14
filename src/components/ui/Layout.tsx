import Navbar from '../comman/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../comman/Footer'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className="min-h-[85vh] max-w-7xl mx-auto px-4 py-4">
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

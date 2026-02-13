import React from 'react'
import Navbar from '../comman/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../comman/Footer'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className="min-h-[calc(100vh-200px)]">
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

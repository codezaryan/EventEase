import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleLogout = () => {
        setIsAuthenticated(false)
    }

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 rounded-md transition-colors duration-200 ${
            isActive
                ? 'bg-[#eb4e62] text-white font-medium'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
        }`

    return (
        <nav className="bg-slate-950 text-slate-50 px-6 py-3 flex items-center justify-between">
            {/* Logo and Navigation Links */}
            <div className="flex items-center space-x-6">
                <NavLink to="/" className="text-xl font-bold text-[#eb4e62]">
                    EventEase
                </NavLink>
                <div className="flex items-center space-x-2">
                    <NavLink to="/" className={navLinkClass}>
                        Home
                    </NavLink>
                    <NavLink to="/releases" className={navLinkClass}>
                        Releases
                    </NavLink>
                    <NavLink to="/movies" className={navLinkClass}>
                        Movies
                    </NavLink>
                    <NavLink to="/theaters" className={navLinkClass}>
                        Theaters
                    </NavLink>
                </div>
            </div>

            {/* Authentication Links */}
            <div className="flex items-center space-x-4">
                {isAuthenticated ? (
                    <>
                        <NavLink to="/profile" className={navLinkClass}>
                            Profile
                        </NavLink>
                        <button
                            onClick={handleLogout}
                            className="px-3 py-2 rounded-md transition-colors duration-200 text-slate-300 hover:bg-slate-800 hover:text-white"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" className={navLinkClass}>
                            Login
                        </NavLink>
                        <NavLink
                            to="/register"
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
                        >
                            Register
                        </NavLink>
                    </>
                )}
            </div>
        </nav>
    )
}

import { useState } from "react";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setMenuOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md transition-colors duration-200 ${
      isActive
        ? "text-[#eb4e62] font-medium"
        : "text-slate-950 hover:text-[#eb4e62]"
    }`;

  return (
    <nav className="bg-white px-4 sm:px-6 py-3 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold text-[#eb4e62]"
          onClick={() => setMenuOpen(false)}
        >
          EventEase
        </NavLink>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-3">
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

        {/* Desktop Search */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border focus-within:ring-2 focus-within:ring-[#eb4e62]">
          <input
            type="search"
            placeholder="Search"
            className="outline-none text-sm text-black w-32 lg:w-48"
          />
          <IoSearch className="text-gray-500" />
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center space-x-3">
          {isAuthenticated ? (
            <>
              <NavLink to="/profile" className={navLinkClass}>
                Profile
              </NavLink>

              <button
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-md text-sm bg-gray-200 hover:bg-gray-300"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-1.5 bg-[#eb4e62] text-white rounded-md hover:bg-[#d84355]"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-2 border-t pt-3">

          {/* Mobile Search */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-md border">
            <input
              type="search"
              placeholder="Search"
              className="outline-none text-sm w-full"
            />
            <IoSearch />
          </div>

          {/* Mobile Links */}
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/releases"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Releases
          </NavLink>

          <NavLink
            to="/movies"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Movies
          </NavLink>

          <NavLink
            to="/theaters"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Theaters
          </NavLink>

          {/* Mobile Auth */}
          {isAuthenticated ? (
            <>
              <NavLink
                to="/profile"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </NavLink>

              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 rounded-md bg-gray-200"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block text-center px-3 py-2 bg-[#eb4e62] text-white rounded-md"
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
}

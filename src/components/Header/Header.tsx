import { useState } from "react";
import { Logo, AuthComponents }from "./index"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="w-full sm:w-[80%] md:w-[90%] lg:w-[80%] mx-auto sticky sm:my-5 my-2 h-16 flex items-center justify-around bg-white/90 backdrop-blur-sm shadow-md z-50 border-b border-gray-100">

      <div className="flex items-center sm:gap-24 md:gap-12 lg:gap-24">
        {/* Logo */}
        <Logo className={`text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight transform transition-transform duration-300 ease-in-out`} />

        {/* Menu Button */}
        {toggleMenu ? (
          <X
            onClick={() => setToggleMenu(!toggleMenu)}
            className={`text-gray-600 w-6 h-6 cursor-pointer sm:hidden animate-menu-to-x transform transition-all duration-300 ease-in-out`}
          />
        ) : (
          <Menu 
            onClick={() => setToggleMenu(!toggleMenu)}
            className={`text-gray-600 w-6 h-6 cursor-pointer sm:hidden animate-x-to-menu transform transition-all duration-300 ease-in-out`}
          />
        )}
      </div>

      {/* Mobile Nav Menu */}
      <nav className={`fixed inset-0 w-[55%] h-screen ${toggleMenu ? "block" : "hidden"} bg-white/95 backdrop-blur-md flex justify-between flex-col shadow-lg absolute sm:w-3/4 md:w-auto md:relative md:inset-auto md:h-auto md:bg-transparent md:backdrop-blur-0 md:shadow-none md:flex md:items-center md:justify-between transition-all duration-300`}>

        <ul className="w-full mt-5 sm:px-20 sm:flex sm:items-center sm:justify-around sm:my-3 md:mt-0 md:px-0 md:mx-4 lg:mx-8">
          <li className="max-w-15 text-center px-6 py-3 transition-colors duration-200">
            <NavLink to="/home"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600 text-shadow-2xs"
            )}
            >Home</NavLink>
          </li>
          <li className="max-w-18 text-center px-6 py-3 transition-colors duration-200">
            <NavLink to="/about"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600 text-shadow-2xs"
            )}
            >About</NavLink>
          </li>
          <li className="max-w-18 text-center px-6 py-3 transition-colors duration-200">
            <NavLink to="/blogs"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600 text-shadow-2xs"
            )}
            >Blogs</NavLink>
          </li>
          <li className="max-w-18 text-center px-6 py-3 transition-colors duration-200">
            <NavLink to="/services"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600 text-shadow-2xs"
            )}
            >Services</NavLink>
          </li>
          <li className="max-w-18 text-center px-6 py-3 transition-colors duration-200">
            <NavLink to="/contact"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600 text-shadow-2xs"
            )}
            >Contact</NavLink>
          </li>
        </ul>

        <AuthComponents className="mb-5 sm:ml-24 sm:hidden" />
      </nav>

      <AuthComponents className="hidden md:block" />
    </header>
  )
}

export default Header
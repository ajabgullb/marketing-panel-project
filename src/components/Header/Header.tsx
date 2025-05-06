import { useState } from "react";
import { Logo, AuthComponents }from "./index"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="w-full min-h-14 sticky flex items-center justify-around sm:justify-around sm:mb-5 sm:pl-20 sm:shadow-xl sm:bg-gray-200">

      {/* Logo */}
      <Logo className='w-full text-[18px] text-shadow-2xs sm:text-2xl sm:'/>

      {toggleMenu ? (
      <X
        onClick={() => setToggleMenu(!toggleMenu)}
        className={`cursor-pointer sm:hidden`}
      />
      ) : (
        <Menu 
          onClick={() => setToggleMenu(!toggleMenu)}
          className={`cursor-pointer sm:hidden`}
        />
      )}

      {/* Mobile Nav Menu */}
      <nav className={`w-1/2 h-screen ${toggleMenu ? "block" : "hidden"} top-0 left-0 bg-gray-200 flex flex-col justify-between shadow-lg absolute sm:w-3/4 sm:justify-center sm:block sm:h-20 sm:relative sm:shadow-none sm:animate-none sm:grid sm:grid-cols-2 sm:pl-20 sm:gap-24 ${toggleMenu ? "motion-preset-slide-right" : "motion-preset-slide-left"} transition-transform duration-300`}>

        <ul className="w-full mt-10 sm:flex sm:my-5">
          <li className="min-w-15 sm:text-center mx-5 py-2 ease-in-out">
            <NavLink to="/home"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600 text-shadow-2xs"
            )}
            >Home</NavLink>
          </li>
          <li className="min-w-15 sm:text-center mx-5 py-2 ease-in-out">
            <NavLink to="/about"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600 text-shadow-2xs"
            )}
            >About</NavLink>
          </li>
          <li className="min-w-15 sm:text-center mx-5 py-2 ease-in-out">
            <NavLink to="/blogs"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600 text-shadow-2xs"
            )}
            >Blogs</NavLink>
          </li>
          <li className="min-w-18 sm:text-center mx-5 py-2 ease-in-out">
            <NavLink to="/services"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600 text-shadow-2xs"
            )}
            >Services</NavLink>
          </li>
          <li className="min-w-18 sm:text-center mx-5 py-2 ease-in-out">
            <NavLink to="/contact"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600 text-shadow-2xs"
            )}
            >Contact</NavLink>
          </li>
        </ul>

        <AuthComponents className="sm:ml-20" />
      </nav>

    </header>
  )
}

export default Header
import { useState } from "react";
import { Logo, AuthComponents }from "./index"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="w-full min-h-14 md:min-h-20 flex items-center justify-around bg-amber-600 sticky">
      {/* Logo */}
      <Logo className='text-[18px] md:text-2xl'/>

      {toggleMenu ? (
      <X
        onClick={() => setToggleMenu(prev => !prev)}
        className="cursor-pointer md:hidden"
      />
      ) : (
        <Menu 
          onClick={() => setToggleMenu(prev => !prev)}
          className="cursor-pointer md:hidden"
        />
      )}

      {/* NavBar */}
      <nav className={`w-full md:h-3/4 bg-amber-600 py-2 ${toggleMenu ? "block" : "hidden"} md:block absolute md:relative top-10 md:top-0 flex flex-col md:flex-row items-center md:justify-between gap-5`}>

        <ul className="w-3/4 md:text-lg md:flex md:justify-center md:items-center md:gap-5">
          <li className="min-w-15 text-center ease-in-out">
            <NavLink to="/home"
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600"
            )}
            >Home</NavLink>
          </li>
          <li className="min-w-15 text-center ease-in-out">
            <NavLink to="/about"
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600"
            )}
            >About</NavLink>
          </li>
          <li className="min-w-15 text-center ease-in-out">
            <NavLink to="/blogs"
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600"
            )}
            >Blogs</NavLink>
          </li>
          <li className="min-w-18 text-center ease-in-out">
            <NavLink to="/services"
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600"
            )}
            >Services</NavLink>
          </li>
          <li className="min-w-18 text-center ease-in-out">
            <NavLink to="/contact"
              className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "md:hover:font-bold md:hover:text-gray-600"
            )}
            >Contact</NavLink>
          </li>
        </ul>

        <AuthComponents />
      </nav>
    </header>
  )
}

export default Header
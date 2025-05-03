import { NavLink } from "react-router-dom"

const Nav = ({className}: any) => {

  return (
    <nav className={`w-full flex justify-center items-center ${className}`}>
      <ul className='w-full text-lg flex justify-center items-center gap-5'>

        <li className="min-w-15 text-center ease-in-out">
          <NavLink to="/home"
            className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "hover:font-bold hover:text-gray-600"
            )}
          >Home</NavLink>
        </li>
        <li className="min-w-15 text-center ease-in-out">
          <NavLink to="/about"
            className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "hover:font-bold hover:text-gray-600"
            )}
          >About</NavLink>
        </li>
        <li className="min-w-15 text-center ease-in-out">
          <NavLink to="/blogs"
            className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "hover:font-bold hover:text-gray-600"
            )}
          >Blogs</NavLink>
        </li>
        <li className="min-w-18 text-center ease-in-out">
          <NavLink to="/services"
            className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "hover:font-bold hover:text-gray-600"
            )}
          >Services</NavLink>
        </li>
        <li className="min-w-18 text-center ease-in-out">
          <NavLink to="/contact"
            className={({ isActive }) => (
              isActive ? "text-gray-600 font-bold" : "hover:font-bold hover:text-gray-600"
            )}
          >Contact</NavLink>
        </li>

      </ul>
    </nav>
  )
}

export default Nav
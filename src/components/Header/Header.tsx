import { Logo, AuthComponents, Nav }from "./index"

const Header = () => {

  return (
    <header className="w-full min-h-20 bg-orange-500 flex justify-baseline items-center md:w-full ">

      {/* Logo */}
      <div className='w-full flex justify-center items-center'>
        <Logo />
      </div>

      {/* NavBar */}
      <Nav />
        
      {/* Auth Buttons or Profile */}
      <AuthComponents />

    </header>
  )
}

export default Header
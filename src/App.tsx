import { Outlet, useLocation } from "react-router-dom"
import { Header, Footer } from "./components/index"

export const App = () => {
  const location = useLocation()
  const authRoutes = ["/login", "/signup"]

  if (authRoutes.includes(location.pathname)) {
    return (
      <>
        <Outlet />
      </>
    )
  } else {
    return (
      <>
        <Header />
          <main>
            <Outlet />
          </main>
        <Footer />
      </>
    )
  }
  
}

export default App
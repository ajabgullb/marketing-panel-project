import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/input-fix.css' // Fix for input fields turning white on autofill
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Apply dark mode to the HTML element
document.documentElement.classList.add('dark')

import App from './App.tsx'
import { Home, About, Blogs, Services, Contact, Login, Signup } from "./pages/index.ts"
import { Provider } from 'react-redux'
import store from './store/store.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About />},
      { path: "/blogs", element: <Blogs />},
      { path: "/services", element: <Services />},
      { path: "/contact", element: <Contact />},
      { path: "/signup", element: <Signup />},
      { path: "/login", element: <Login />},
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)


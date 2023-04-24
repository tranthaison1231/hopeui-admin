import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/index'
import './style.css'
import Login from './pages/login'
import Email from './pages/email'
import LockScreen from './pages/lock-screen'
import Reset from './pages/reset-password'
import DashBoard from './pages/dashboard'

const App = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },

    {
      path: '/email',
      element: <Email />
    },

    {
      path: '/lock-screen',
      element: <LockScreen />
    },

    {
      path: '/reset-password',
      element: <Reset />
    },

    {
      path: '/dashboard',
      element: <DashBoard />
    }
  ])

  return (
    <div className="w-full h-screen font-inter">
      <RouterProvider router={router} />
    </div>
  )
}

createRoot(document.getElementById('app') as HTMLElement).render(
  <App />
)

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/index'
import './style.css'
import Login from './pages/login'
import Email from './pages/email'
import LockScreen from './pages/lockscreen'
import Reset from './pages/reset'

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
      path: '/lockScreen',
      element: <LockScreen />
    },

    {
      path: '/resetPassword',
      element: <Reset />
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

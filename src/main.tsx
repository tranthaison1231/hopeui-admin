import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/index'
import './style.css'
import Login from '@/pages/login'
import NotFoundPage from '@/pages/404'
import ServerErrorPage from '@/pages/500'
import Email from '@/pages/email'
import LockScreen from '@/pages/lock-screen'
import ResetPassword from '@/pages/reset-password'
import './style.css'

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
      path: '/404',
      element: <NotFoundPage />
    },
    {
      path: '/500',
      element: <ServerErrorPage />
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
      element: <ResetPassword />
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

import NotFoundPage from '@/pages/404'
import ServerErrorPage from '@/pages/500'
import Email from '@/pages/email'
import Home from '@/pages/index'
import LockScreen from '@/pages/lock-screen'
import Login from '@/pages/login'
import ResetPassword from '@/pages/reset-password'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Maintenance from './pages/maintenance'
import SignUp from './pages/sign-up'
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
      path: '/sign-up',
      element: <SignUp />
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
    },
    {
      path: '/maintenance',
      element: <Maintenance />
    },
    {
      path: '/500',
      element: <ServerErrorPage />
    },
    {
      path: '*',
      element: <NotFoundPage />
    },
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

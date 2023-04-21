import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/index'
import './style.css'
import Login from '@/pages/login'
import NotFoundPage from '@/pages/404'
import ServerErrorPage from '@/pages/500'

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

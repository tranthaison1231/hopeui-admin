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
// import Billing from './pages/billing'
import MenuStyle from './pages/menu-style'
import Example from './pages/example'
import { NavbarProvider } from './contexts/NavbarContext'
import Widgets from './pages/widgets'
import Maps from './pages/maps'
import Authentication from './pages/authentication'
import Users from './pages/users'
import Spacial404 from './pages/Spacial404'
import Spacial505 from './pages/spacial505'
import MaintenanceSpacial from './pages/SpacialMaintence'
import Components from './pages/components'
import Form from './pages/form'
import Table from './pages/table'
import Icon from './pages/icon'

const App = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/menu-style',
      element: <MenuStyle />
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
      path: '/example',
      element: <Example />
    },
    {
      path: '/widgets',
      element: <Widgets />
    },
    {
      path: '/maps',
      element: <Maps />
    },
    {
      path: '/authentication',
      element: <Authentication />
    },
    {
      path: '/users',
      element: <Users />
    },
    {
      path: '/404',
      element: <Spacial404 />
    },
    {
      path: '/505',
      element: <Spacial505 />
    },
    {
      path: '/maintence',
      element: <MaintenanceSpacial />
    },
    {
      path: '/components',
      element: <Components />
    },
    {
      path: '/form',
      element: <Form />
    },
    {
      path: '/table',
      element: <Table />
    },
    {
      path: '/icon',
      element: <Icon />
    },
    // {
    //   path: '/billing',
    //   element: <Billing />
    // },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])
  
  return (
    <div className="w-full font-inter">
      <RouterProvider router={router} />
    </div>
  )
}

createRoot(document.getElementById('app') as HTMLElement).render(
  <NavbarProvider>
    <App />
  </NavbarProvider>
)

import NotFoundPage from '@/pages/404'
import ServerErrorPage from '@/pages/500'
import Email from '@/pages/email'
import Home from '@/pages/index'
import LockScreen from '@/pages/lock-screen'
import ResetPassword from '@/pages/reset-password'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { NavbarProvider } from './contexts/NavbarContext'
import Billing from './pages/billing'
import Login from './pages/login'
import Maintenance from './pages/maintenance'
import MenuStyle from './pages/menu-style'
import './style.css'
<<<<<<< HEAD
// import Billing from './pages/billing'
import MenuStyle from './pages/menu-style'
import Example from './pages/example'
import { NavbarProvider } from './contexts/NavbarContext'
import Widgets from './pages/widgets'
import Maps from './pages/maps'
import Authentication from './pages/authentication'
import Users from './pages/users'
import Spacial404 from './pages/spacial404'
import Spacial505 from './pages/spacial505'
import MaintenanceSpacial from './pages/spacialMaintence'
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
=======
import SignUp from './pages/sign-up'

const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY

if (!clerkPubKey) {
  throw new Error('Missing Publishable Key')
}

const App = (): JSX.Element => {
  const navigate = useNavigate()
  
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={to => navigate(to)}
    >
      <Routes>
        <Route
          path="/sign-in/*"
          element={ <Login /> }
        />
        <Route path="/sign-up/*" element={<SignUp  />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/lock-screen" element={<LockScreen />} />
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <Outlet />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/email" element={<Email />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/500" element={<ServerErrorPage />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/menu-style" element={<MenuStyle />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ClerkProvider>
>>>>>>> a263800edd02179efd35767965ccf3799441809a
  )
}

createRoot(document.getElementById('app') as HTMLElement).render(
<<<<<<< HEAD
  <NavbarProvider>
    <App />
  </NavbarProvider>
=======
  <BrowserRouter>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </BrowserRouter>
>>>>>>> a263800edd02179efd35767965ccf3799441809a
)

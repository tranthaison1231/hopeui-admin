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
import SignUp from './pages/sign-up'

const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY

if (!clerkPubKey) {
  throw new Error('Missing Publishable Key')
}

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
      path: '/billing',
      element: <Billing />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={to => navigate(to)}>
      <Routes>
        <Route path="/sign-in/*" element={<Login />} />
        <Route path="/sign-up/*" element={<SignUp />} />
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
  )
}

createRoot(document.getElementById('app') as HTMLElement).render(
  <BrowserRouter>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </BrowserRouter>
)

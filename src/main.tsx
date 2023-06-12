import NotFoundPage from '@/pages/404'
import ServerErrorPage from '@/pages/500'
import Email from '@/pages/email'
import Home from '@/pages/index'
import LockScreen from '@/pages/lock-screen'
import ForgotPassword from '@/pages/forgot-password'
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
import { Toaster } from 'react-hot-toast'
import AuthGuard from './guards/AuthGuard'

const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY

if (!clerkPubKey) {
  throw new Error('Missing Publishable Key')
}

const App = (): JSX.Element => {
  const navigate = useNavigate()
  
  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={to => navigate(to)}>
      <Routes>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up/*" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/lock-screen" element={<LockScreen />} />
        <Route
          path="/"
          element={
            <AuthGuard>
              <Outlet />
            </AuthGuard>
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
    <Toaster position="top-right" />
  </BrowserRouter>
)

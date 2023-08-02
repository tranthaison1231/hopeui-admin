import NotFoundPage from '@/pages/404'
import ServerErrorPage from '@/pages/500'
import Email from '@/pages/email'
import ForgotPassword from '@/pages/forgot-password'
import Home from '@/pages/index'
import LockScreen from '@/pages/lock-screen'
import ResetPassword from '@/pages/reset-password'
import { ClerkProvider } from '@clerk/clerk-react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { NavbarProvider } from './contexts/NavbarContext'
import AuthGuard from './guards/AuthGuard'
import Billing from './pages/billing'
import ChangePassword from './pages/change-password'
import Login from './pages/login'
import Maintenance from './pages/maintenance'
import MenuStyle from './pages/menu-style'
import SignUp from './pages/sign-up'
import './style.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import PrivateLayout from './components/PrivateLayout'

const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY

if (!clerkPubKey) {
  throw new Error('Missing Publishable Key')
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const App = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={to => { navigate(to) }}>
      <Routes>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up/*" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/lock-screen" element={<LockScreen />} />
        <Route
          path="/"
          element={
            <AuthGuard>
              <PrivateLayout>
                <Outlet />
              </PrivateLayout>
            </AuthGuard>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/menu-style" element={<MenuStyle />} />
          <Route path="/email" element={<Email />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/500" element={<ServerErrorPage />} />
          <Route path="/billing" element={<Billing />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ClerkProvider>
  )
}

createRoot(document.getElementById('app') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <NavbarProvider>
        <App />
      </NavbarProvider>
      <Toaster position="bottom-left" />
    </BrowserRouter>
  </QueryClientProvider>
)

import { IndexPage } from '../pages/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './DefaultLayout'
import { LoginPage } from '../pages/login'
import { RegisterPage } from '../pages/register'
import { ProfilePage } from '../pages/profile/[username]'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  )
}

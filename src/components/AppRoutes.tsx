import { IndexPage } from '../pages/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './DefaultLayout'
import { LoginPage } from '../pages/login'
import { RegisterPage } from '../pages/register'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  )
}

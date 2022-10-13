import { IndexPage } from '../pages/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './DefaultLayout'
import { LoginPage } from '../pages/login'
import { RegisterPage } from '../pages/register'
import { ProfilePage } from '../pages/profile/[username]'
import { ArticlePage } from '../pages/articles/[slug]'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  )
}

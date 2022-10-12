import { IndexPage } from '../pages/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './DefaultLayout'

export const AppRoutes = () => {
  return (
    <DefaultLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </DefaultLayout>
  )
}

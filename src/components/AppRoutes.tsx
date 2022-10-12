import { IndexPage } from '../pages/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  )
}

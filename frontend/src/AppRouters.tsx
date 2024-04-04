import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import HomePage from './pages/HomePage'

const AppRouters = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/about" element={<span>USER PROFILE PAGE</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRouters

import { Navigate, Route, Routes } from 'react-router-dom'

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<span>HOME PAGE</span>} />
      <Route path="/about" element={<span>USER PROFILE PAGE</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRouters

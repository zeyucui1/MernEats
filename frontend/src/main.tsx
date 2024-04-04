import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouters from './AppRouters'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppRouters />
    </Router>
  </React.StrictMode>
)

import { createRoot } from 'react-dom/client'
import React from 'react';

import './style.css'
import { BrowserRouter } from "react-router-dom"
import MainRoutes from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>  // Wrap the App component with BrowserRouter for routing
)



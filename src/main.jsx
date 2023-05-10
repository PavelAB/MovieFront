import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Import routing
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { route } from './routes/route.jsx'

//FIXME ajouter le fichier "js" avec tous les routes
const router = createBrowserRouter(route)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)

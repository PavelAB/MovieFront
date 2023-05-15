import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Import routing
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { route } from './routes/route.jsx'

// Redux Imports 
import store from './store/store'
import { Provider } from 'react-redux' //TODO Se renseigner sur le Provider 'react-redux'


const router = createBrowserRouter(route)

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <Provider store={store}>
    <RouterProvider router = {router} />
  </Provider>
  //</React.StrictMode>,
)

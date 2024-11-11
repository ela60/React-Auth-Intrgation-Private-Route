import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Orders from './components/Orders.jsx';
import PrivateRoute from './components/routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: 'login',
        element:<Login/>
      },
      {
        path: 'register',
        element:<Register/>
      },
      {
        path: 'orders',
        element:<PrivateRoute><Orders/></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Component/AddCoffee.jsx';
import UpdateCoffee from './Component/UpdateCoffee.jsx';
import SignIn from './Component/SignIn.jsx';
import SignUp from './Component/SignUp.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './Component/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: 'addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: 'signIn',
    element: <SignIn></SignIn>
  },
  {
    path: 'signUp',
    element: <SignUp></SignUp>
  }, {
    path: 'users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

// import "./layout.scss"
import HomePage from './rotes/homepage/HomePage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ListPage from './rotes/listPage/ListPage';
import Layout from './rotes/layout/Layout';
import ProfilePage from './rotes/profilePage/ProfilePage';
import SinglePage from './rotes/singlePage/SinglePage';
import Login from './rotes/login/Login';
import Register from './rotes/register/Register';
// import './App.css'

function App() {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <HomePage />
            },
            {
              path: "/list",
              element: <ListPage />
            },
            {
              path: "/:id",
              element: <SinglePage />
            },
            {
              path: "/profile",
              element: <ProfilePage />
            },
            {
              path: "/login",
              element:<Login />
            },
            {
              path: "/register",
              element: <Register />

            }
          ]
        }
    ])

  

  return (
    
    <RouterProvider router={router} />
  )
}

export default App

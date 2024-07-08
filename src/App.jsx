// import { useState } from 'react'
// import Navbar from "./components/navbar/Navbar";
// import "./layout.scss"
import HomePage from './rotes/HomePage/HomePage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from './rotes/listPage/ListPage';
import Layout from './rotes/layout/Layout';
import ProfilePage from './rotes/profilePage/ProfilePage';
import SinglePage from './rotes/singlePage/SinglePage';
import './App.css'

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
            }
          ]
        }
    ])

  

  return (
    
    <RouterProvider router={router} />
  )
}

export default App

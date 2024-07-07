import { useState } from 'react'
import Navbar from "./components/navbar/Navbar";
// import "./layout.scss"
import HomePage from './rotes/j/Homepage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from './rotes/layout/Layout';
import Layout from './rotes/layout/Layout';
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
            }
          ]
        }
    ])

  

  return (
    
    <RouterProvider router={router} />
  )
}

export default App

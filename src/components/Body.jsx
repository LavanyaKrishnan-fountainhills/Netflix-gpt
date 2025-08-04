import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { BrowserRouter, Router, Routes,Route, createBrowserRouter, RouterProvider } from 'react-router-dom'


const Body = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Login />

        },
        {
            path:'/browse',
            element:<Browse />
        }
    ])


  return <RouterProvider router={router} />
}

export default Body
import React from 'react'
import { useState, useEffect } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import HomePage from "./Components/HomePage/HomePage";
import MainLayout from './Components/MainLayout/MainLayout';
export default function App() {


  let routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [

        { index: true, element: <HomePage /> },



      ],
    }

  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

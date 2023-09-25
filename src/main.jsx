import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Home from './pages/Home/Home'
import Donation from './pages/Donation/Donation'
import Statistics from './pages/Statistics/Statistics'
import DonationDetails from './pages/DonationDetails/DonationDetails'

const router= createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/home',
        element:<Home></Home>,
        loader:()=>fetch('donation.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/donationDetails/:category',
        element:<DonationDetails></DonationDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

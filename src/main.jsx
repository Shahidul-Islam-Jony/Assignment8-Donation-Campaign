import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Home from './pages/Home/Home'
import Donation from './pages/Donations/Donations'
import Statistics from './pages/Statistics/Statistics'
import DonationDetails from './pages/DonationDetails/DonationDetails'

const router= createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/home',
        element:<Home></Home>,
      },
      {
        path:'/donation',
        element:<Donation></Donation>,
        loader:()=>fetch('donation.json')
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
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

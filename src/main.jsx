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
        path:'/donations',
        element:<Donation></Donation>,
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
        loader:()=>fetch('donation.json')
      },
      {
        path:'/donationDetails/:title',
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

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import AppliedJob from './components/AppliedJobs/AppliedJob';
import JobData from './components/JobData/JobData';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobDatas.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/:id',
        element: <JobDetails></JobDetails>,
      },
      {
        path: '/applied',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

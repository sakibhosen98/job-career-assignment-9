import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { createContext } from 'react'

export const JobDataContext = createContext([]);

function App() {
  const jobData = useLoaderData()
  return (
    <div className="App container">
      <JobDataContext.Provider value={jobData}>
      <Navbar></Navbar>
        <Outlet></Outlet>
      </JobDataContext.Provider>
        
        {/* <Navbar></Navbar>
        <Outlet></Outlet> */}
    </div>
  )
}

export default App

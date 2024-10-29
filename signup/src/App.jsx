import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Gridget from './components/Gridget'
import Task from './components/task'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Signup/>
      <Gridget/>
      <Task/> */}
      <Navbar/>
      
      
      
      <Routes>
        {/* <Route path='/fro ' element={<Gridget/>}/> */}
        <Route path='/sro' element={<Signup/>}/>
        <Route path='/tro' element={<Task/>}/>
        <Route path='/gro' element={<Gridget/>}/>
      </Routes>
      
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import DisplayName from './components/DisplayName'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <StateBasics/> */}
      {/* <Counter/> */}
      {/* <DisplayName/> */}
      <Routes>
        <Route path='/k'  element={<StateBasics/>}></Route>
        <Route path='/l'  element={<Counter/>}></Route>
        
        <Route path='/p' element={<DisplayName/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import Home from './components/Home'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
    <div className="flex h-screen bg-[#1A1F33]">
      <Sidebar />
      <Home/>
    </div>
    </>
  )
}

export default App

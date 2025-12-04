import React from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from './components/landing'
import SignIn from './components/SignIn'


const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
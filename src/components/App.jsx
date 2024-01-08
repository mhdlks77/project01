import { useState } from 'react'
import '../styles/App.css'
import Count from './Count';
import UserDisplay from './UserDisplay';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import NavBar from './Navbar';
import Home from '../pages/Home';
import UserLogin from '../pages/UserLogin';
import UserSignUp from '../pages/UserSignUp';
import Contact from '../pages/Contact';

function App() {
  const name = "Ali";


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/userdisplay" element={<UserDisplay />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp/>}/>
      </Routes>
    </Router>
  )
}

export default App

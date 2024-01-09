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
import Dashboard from '../pages/Dashboard';
import { AuthProvider } from '../context/AuthContext';
import PrivateRoute from "../routes/PrivateRoute"
import Logout from './Logout';

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userdisplay" element={<UserDisplay />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignUp />} />
          <Route path="/logout" element={<Logout/>}/>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App

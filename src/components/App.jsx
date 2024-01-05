import { useState } from 'react'
import '../styles/App.css'
import Count from './Count';
import UserDisplay from './UserDisplay';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbar from './Navbar';
import Home from '../pages/Home';
import UserLogin from '../pages/UserLogin';
import UserSignUp from '../pages/UserSignUp';

function App() {
  const name = "Ali";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userdisplay" element={<UserDisplay />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp/>}/>

      </Routes>
    </Router>
  )
}

export default App

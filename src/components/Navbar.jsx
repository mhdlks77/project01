import { Link } from "react-router-dom"
import Home from "../pages/Home"
import "../styles/navbar.css"


export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navMenu">
                <h3><Link className="link" to="/">Home</Link></h3>
                <h3><Link className="link" to="/contact">Contact</Link></h3>
                <h3><Link className="link" to="/userdisplay">User Display</Link></h3>
                <h5><Link className="link" to="/login">Login</Link></h5>
            </div>
        </div>
    )
}






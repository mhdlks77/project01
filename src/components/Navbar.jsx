import {Link} from "react-router-dom"
import Home from "../pages/Home"


export default function Navbar(){
    return(
        <div className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/userdisplay">User Display</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}
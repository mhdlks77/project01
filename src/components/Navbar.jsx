import { Link, NavLink } from "react-router-dom"
import Home from "../pages/Home"
import "../styles/navbar.css"
import { useAuth } from "../context/AuthContext"


export default function NavBar() {

    const { isAuth, setAuth } = useAuth();

    return (
        <div className="navbar">
            <div className="navMenu">
                <h3>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "link"
                        }
                    >
                        Home
                    </NavLink>
                </h3>
                <h3>
                    <NavLink
                        to="/contact"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "link"
                        }
                    >
                        Contact
                    </NavLink>
                </h3>
                <h3>
                    <NavLink
                        to="/userdisplay"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "link"
                        }
                    >
                        User Cards
                    </NavLink>
                </h3>
                <h5>{!isAuth ? <Link className="link" to="/login">Login</Link> :
                    <Link className="link" to="/logout" >log out</Link>}</h5>
            </div>
        </div>
    )
}






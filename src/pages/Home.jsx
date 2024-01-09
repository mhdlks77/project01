import { useAuth } from "../context/AuthContext";
import "../styles/home.css"

export default function Home() {

    const {isAuth, setAuth} = useAuth();

    return(
        <div className="Home">
            <h1>Welcome Home!</h1>
            {console.log("auth: " + isAuth)}
        </div>
    )
}
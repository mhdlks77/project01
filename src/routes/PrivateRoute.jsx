import { Navigate, Route } from "react-router";
import { useAuth } from "../context/AuthContext"
import Dashboard from "../pages/Dashboard";



const PrivateRoute = ({children}) => {
    const {isAuth, setAuth} = useAuth();
    const authSession = sessionStorage.getItem("isAuth");
    if(authSession){
        
    }

    return isAuth? children : <Navigate to="/login" />
}

export default PrivateRoute;
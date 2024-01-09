import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";



export default function Logout(){

    const {isAuth, setAuth} = useAuth();
    useEffect(()=>{
        setAuth(false);
        sessionStorage.setItem("isAuth",isAuth)
    },[])

    return(
        <Navigate to="/"/>
    )
}
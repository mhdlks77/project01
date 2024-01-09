import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [isAuth, setAuth] = useState(localStorage.getItem("isAuth"));
    

    return (
        <AuthContext.Provider value={{ isAuth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    if(!useContext(AuthContext)){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return useContext(AuthContext);
}

export {AuthProvider, useAuth}

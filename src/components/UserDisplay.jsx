import "../styles/UserDisplay.css"
import User from "../components/User"
import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";




export default function UserDisplay() {

    const [newUser, setNewUser] = useState(new User('', '', '', ''));
    const [userArray, setUserArray] = useState([]);

    const storageArray = JSON.parse(window.localStorage.getItem("userArray"));


    useEffect(() => {
        const localStorageArray = JSON.parse(window.localStorage.getItem("userArray"));
        if(localStorageArray){
            setUserArray(localStorageArray);
        }
    }, [])

    useEffect(() => {
        if (userArray.length != 0) {
            window.localStorage.setItem("userArray", JSON.stringify(userArray))
        }
    }, [userArray])


    return (
        <div className="UserDisplay">
            <h2>Users</h2>
            <div className="user-cards-container">
                {userArray.map((user, key) => {
                    return (
                        <div key={key} className="user-card">
                            <p>{user.name}</p>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                            <p>{user.gender}</p>
                            {user.available ? <p>Available</p> : <p>Unavailable</p>}
                        </div>
                    )
                })}
            </div>
            <UserForm newUser={newUser} setNewUser={setNewUser}
                userArray={userArray} setUserArray={setUserArray} />
        </div>
    )
}

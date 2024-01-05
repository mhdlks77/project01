import "../styles/UserDisplay.css"
import User from "../components/User"
import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";




export default function UserDisplay() {

    const [newUser, setNewUser] = useState(new User('', '', '', '', '',''));
    const [userArray, setUserArray] = useState([]);
    const [idCounter, setIdCounter] = useState(1001);

    const storageArray = JSON.parse(window.sessionStorage.getItem("userArray"));


    useEffect(() => {
        const sessionStorageArray = JSON.parse(window.sessionStorage.getItem("userArray"));
        if(sessionStorageArray){
            setUserArray((arr) => [...sessionStorageArray]);
        }
        console.log(newUser.id)
    }, [])

    useEffect(() => {
        if (userArray.length != 0) {
            window.sessionStorage.setItem("userArray", JSON.stringify(userArray));
            console.log(userArray[userArray.length - 1])
        }
    }, [userArray])


    return (
        <div className="UserDisplay">
            <h2>Users</h2>
            <div className="user-cards-container">
                {userArray.map((user, key) => {
                    return (
                        <div key={key} className="user-card">
                            <p>{user.id}</p>
                            <p>{user.name}</p>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                            <p>{user.gender}</p>
                        </div>
                    )
                })}
            </div>
            <UserForm newUser={newUser} setNewUser={setNewUser}
                userArray={userArray} setUserArray={setUserArray}
                idCounter={idCounter} setIdCounter={setIdCounter} />
        </div>
    )
}

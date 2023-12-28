import "../styles/UserDisplay.css"
import User from "../components/User"
import React, { useState } from "react";
import { userSchema } from "../validations/userValidation";

export default function UserDisplay() {


    const [newUser, setNewUser] = useState(new User('', '', '', ''));
    const [userArray, setUserArray] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    const handleRadioChange = (e) => {
        const { value } = e.target;
        setNewUser((currUser) => ({
            ...currUser, available: value === 'true'
        }))
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let formData = {
            name: e.target[0].value,
            age: e.target[1].value,
            gender: e.target[2].value,
            available: e.target[3].value,
        }
        const isValid = await userSchema.isValid(formData);
        if (isValid) {
            setUserArray((prevArray) => [...prevArray, newUser]);
            // setNewUser(new User('', '', '', ''))
            e.target[0].value = "";
            e.target[1].value = "";
            e.target[2].value = "";
        }
        else{window.alert('Error')}
    }

    return (
        <div className="UserDisplay">
            <h2>Users</h2>
            <div className="user-cards-container">
                {userArray.map((user, key) => {
                    return (
                        <div key={key} className="user-card">
                            <p>{user.name}</p>
                            <p>{user.age}</p>
                            <p>{user.gender}</p>
                            {user.available ? <p>Available</p> : <p>Unavailable</p>}
                        </div>
                    )
                })}
            </div>
            <div className="user-form-container">
                <form className="user-form" onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange} />
                    <br />
                    <input
                        type="text"
                        name="age"
                        placeholder="Age"
                        onChange={handleChange} />
                    <br />
                    <select
                        name="gender"
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <br />
                    <div className="radio-container">
                        <div className="input-label">
                            <input className="radio"
                                type="radio"
                                name="available"
                                value={true}
                                onChange={handleRadioChange} />
                            <label>Available</label>
                        </div>
                        <br />
                        <div className="input-label">
                            <input className="radio"
                                type="radio"
                                name="available"
                                value={false}
                                onChange={handleRadioChange} />
                            <label>Unavailable</label>
                            <br />
                        </div>
                    </div>
                    <button type="submit">Add User</button>
                </form>
            </div>

        </div>
    )
}

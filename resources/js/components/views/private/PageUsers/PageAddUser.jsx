import React, { useState } from 'react';
import postUsers from './tables/AddUsers.jsx';
import { useNavigate } from 'react-router-dom';


const PageAddUser = () => {
    const [newUser, setNewUser] = useState({ username: '', email: '',
        password: '', firstname: '', middlename: '', lastname: '', name_ext: '', gender: '', status: ''});

    const navigate = useNavigate();


    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        await postUsers(newUser);
    };

    const BackToUserTable = () => {
        navigate('/users');
    }

    const addUserButton = {
        padding: '10px',
        backgroundColor: '#87CEEB',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        fontWeight: 'bold'
    }

    const options = {
        padding: '10px',
         borderRadius: '5px',
         border: '1px solid #ccc',
         width: '100%'
    }

    const inputUser = {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    }

    const divContainer = {
        padding: '20px',
        maxWidth: '50%',
        margin: 'auto',
        marginTop: '5%'
    }

    const userForm = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        background: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
    }


    return (
        <div style={divContainer}>
            <div>
            <button onClick={BackToUserTable}>Back to table</button>
                <form onSubmit={handleSubmit}
                    style={userForm}>

                        <input type="text" name="username" placeholder="User Name" value={newUser.username} onChange={handleChange} required
                            style={inputUser} />

                        <input type="text" name="email" placeholder="Email" value={newUser.email} onChange={handleChange} required
                            style={inputUser} />

                        <input type="password" name="password" placeholder="Password" value={newUser.password} onChange={handleChange} required
                            style={inputUser} />

                        <input type="text" name="firstname" placeholder="First Name" value={newUser.firstname} onChange={handleChange} required
                            style={inputUser} />

                        <input type="text" name="middlename" placeholder="Middle Name" value={newUser.middlename} onChange={handleChange} required
                            style={inputUser} />

                        <input type="text" name="lastname" placeholder="Last Name" value={newUser.lastname} onChange={handleChange} required
                            style={inputUser} />

                        <input type="text" name="name_ext" placeholder="Name Extension" value={newUser.name_ext} onChange={handleChange}
                            style={inputUser} />

                        <select
                                name="gender"
                                value={newUser.gender}
                                onChange={handleChange}
                                required
                                style={options}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                        </select>
                        <select
                                name="status"
                                value={newUser.status}
                                onChange={handleChange}
                                required
                                style={options}
                            >
                                <option value="">Select Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                        </select>
                        <div>
                    </div>
                        <button type="submit"
                            style={addUserButton}>
                            Add User
                        </button>
                </form>
            </div>
        </div>
    );
};

export default PageAddUser;

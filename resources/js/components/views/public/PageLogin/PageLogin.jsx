import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageLogin() {
    const navigate = useNavigate();

    const formContainer = {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '30px',
        border: '2px solid #ccc',
        borderRadius: '8px',
        marginTop: '150px',
        textAlign: 'center'
    };

    const loginButton = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '14px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
        width: '100%',
        border: 'none'
    };

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/home");
    };

    return (
        <div>
            <form style={formContainer} onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <br /><br />
                <button type="submit" style={loginButton}>Login</button>
            </form>
        </div>
    );
}

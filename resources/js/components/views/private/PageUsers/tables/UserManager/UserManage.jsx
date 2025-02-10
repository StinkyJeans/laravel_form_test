import React, { useEffect, useState } from 'react';
import axios from 'axios';


// Post User
export const postUsers = async (userData) => {
    try {
        const formData = new FormData();
        formData.append('username', userData.username);
        formData.append('email', userData.email);
        formData.append('password', userData.password);
        formData.append('firstName', userData.firstName);
        formData.append('middleName', userData.middleName);
        formData.append('lastName', userData.lastName);
        formData.append('name_ext', userData.name_ext);
        formData.append('gender', userData.gender);
        formData.append('status', userData.status);

        await axios.post('/api/users', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        window.location.href = '/users';
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

// Delete User
export const DeleteUser = async (userId) => {
    try {
        await axios.delete(`/api/users/${userId}`);
        window.location.reload();
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

// Edit User
export const EditUser = async (userId, userData) => {
    try {
        const response = await axios.put(`/api/users/${userId}`, userData, {
            headers: { 'Content-Type': 'application/json' }
        });
        window.location.reload();
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

// Get Users
export const GetUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                console.log(response.data);
                setUsers(response.data.users);
            } catch (err) {
                setError('Failed to fetch users');
                console.error(err);
            }
        };

        fetchUsers();
    }, []);

    return { users, error };
};
//Restore User
export const restoreUser = async (userId, useArchivedUsers) => {
    try {
        await axios.post(`/api/users/${userId}/restore`);
        alert('User restored successfully');

        if (useArchivedUsers) {
            useArchivedUsers();
        }
        window.location.reload();
    } catch (error) {
        alert('Failed to restore user');
        console.error('Error restoring user:', error);
    }
};


export const MultipleDeleteUser = async (selectedUsers) => {
    try {
        await axios.delete('/api/users', {
            data: { ids: selectedUsers }  // Send the IDs in the request body
        });
        window.location.reload();
        return { success: true };
    } catch (error) {
        console.error('Error deleting users:', error);
        return {
            success: false,
            message: error.response?.data?.message || error.message
        };
    }
};

// Print User Table
export const PrintUserTable = ({ setShowPrintTab }) => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const printButton = {
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        marginTop: '10px'
    }
    const tablePrint = {
        width: '100%',
        borderCollapse: 'collapse'
    }

    const tableRow = {
        backgroundColor: '#48a860',
        color: 'white'
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(Array.isArray(response.data.users) ? response.data.users : []);
            } catch (error) {
                setError(error.message);
                console.error("Fetch Error:", error);
            }
        };
        fetchUsers();
    }, []);

    const handlePrint = () => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
            <head>
                <title>User List</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        text-align: center;
                    }
                    h1 {
                        color: #333;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 10px;
                        text-align: left;
                    }
                    th {
                        background-color: #48a860;
                        color: white;
                    }
                    tr:nth-child(even) {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>User List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Name Extension</th>
                            <th>Gender</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${users.map(user => `
                            <tr>
                                <td>${user.username}</td>
                                <td>${user.email}</td>
                                <td>${user.firstName}</td>
                                <td>${user.middleName}</td>
                                <td>${user.lastName}</td>
                                <td>${user.name_ext || 'N/A'}</td>
                                <td>${user.gender}</td>
                                <td>${user.status}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <script>
                    window.onload = function() {
                     window.print();
                     window.close();
                 }
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    };

    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>User List Preview</h2>
            <table style={tablePrint}>
                <thead>
                    <tr style={tableRow}>
                        <th>Username</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Name Extension</th>
                        <th>Gender</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.firstName}</td>
                            <td>{user.middleName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.name_ext || 'N/A'}</td>
                            <td>{user.gender}</td>
                            <td>{user.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={handlePrint} style={printButton}>
                Print User List
            </button>
        </div>
    );
};



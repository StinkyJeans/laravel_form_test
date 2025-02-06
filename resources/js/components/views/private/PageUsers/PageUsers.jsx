import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../layouts/Header.jsx';
import GetUsers from './tables/GetUsers.jsx';
import EditUser from './tables/EditUser.jsx';
import DeleteUser from './tables/DeleteUser.jsx';


const PageUsers = () => {
    const { users, error } = GetUsers();
    const navigate = useNavigate();
    const [editUserId, setEditUserId] = useState(null);
    const [userData, setUserData] = useState({});

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleAddUser = () => {
        navigate('/addNewUser');
    }

    const handleEditClick = (user) => {
        setEditUserId(user.id);
        setUserData(user);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSaveEdit = async () => {
        try {
            await EditUser(userData.id, userData);
            setEditUserId(null);
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    }

    const tableHeader = {
        border: '1px solid gray',
        padding: '10px',
    };

    const tableContainer = {
        borderCollapse: 'collapse',
        border: '1px solid gray',
        marginTop: '1rem',
        width: '100%',
    };

    const tableData = {
        border: '1px solid gray',
        padding: '0.5rem 1rem',
    };

    const exportButton = {
        padding: '10px',
        border: 'solid 1px',
        borderRadius: '10px',
        marginLeft: 'auto'
    }

    const EditDeleteButton = {
         padding: '5px',
         border: '1px solid #ccc'
    }

    const tdButton = {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    }

    const selectOptions = {
        width: '100%',
        padding: '5px'
    }
    const exportToCSV = () => {
        const headers = [
            'ID',
            'Username',
            'Email',
            'First Name',
            'Middle Name',
            'Last Name',
            'Name Ext.',
            'Gender',
            'Status',
        ];

        const csvContent = [
            headers.join(','),
            ...users.map(user => [
                user.id || '',
                `"${(user.username || '').replace(/"/g, '""')}"`,
                `"${(user.email || '').replace(/"/g, '""')}"`,
                `"${(user.firstname || '').replace(/"/g, '""')}"`,
                `"${(user.middlename || '').replace(/"/g, '""')}"`,
                `"${(user.lastname || '').replace(/"/g, '""')}"`,
                `"${(user.name_ext || '').replace(/"/g, '""')}"`,
                `"${(user.gender || '').replace(/"/g, '""')}"`,
                `"${(user.status || '').replace(/"/g, '""')}"`,
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.setAttribute('href', url);
        link.setAttribute('download', 'users.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div style={{ padding: '4' }}>
            <Header />
            <h2 style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', fontSize: 'x-large' }}>User Table</h2>
            <button onClick={handleAddUser} style={{ padding: '10px', border: 'solid 1px', borderRadius: '10px' }}>Add User</button>
            <button onClick={exportToCSV} style={exportButton} >Export to CSV</button>
            {/* <button style={}>Print Table</button> */}
            <table style={tableContainer}>
                <thead> 
                    <tr style={{ backgroundColor: '#e2e8f0' }}>
                        <th style={tableHeader}>ID</th>
                        <th style={tableHeader}>Username</th>
                        <th style={tableHeader}>Email</th>
                        <th style={tableHeader}>First Name</th>
                        <th style={tableHeader}>Middle Name</th>
                        <th style={tableHeader}>Last Name</th>
                        <th style={tableHeader}>Name Ext.</th>
                        <th style={tableHeader}>Gender</th>
                        <th style={tableHeader}>Status</th>
                        <th style={tableHeader}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(users) && users.map(user => (
                        <tr key={user.id} style={{ textAlign: 'center' }}>
                            <td style={tableData}>{user.id}</td>
                            <td style={tableData}>
                                {editUserId === user.id ? (
                                    <input
                                        type="text"
                                        name="username"
                                        value={userData.username || user.username}
                                        onChange={handleInputChange}
                                    />
                                ) : user.username}
                            </td>
                            <td style={tableData}>
                                {editUserId === user.id ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={userData.email || user.email}
                                        onChange={handleInputChange}
                                    />
                                ) : user.email}
                            </td>
                            <td style={tableData}>
                                {editUserId === user.id ? (
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={userData.firstname || user.firstname}
                                        onChange={handleInputChange}
                                    />
                                ) : user.firstname}
                            </td>
                            <td style={tableData}>
                                {editUserId === user.id ? (
                                    <input
                                        type="text"
                                        name="middlename"
                                        value={userData.middlename || user.middlename}
                                        onChange={handleInputChange}
                                    />
                                ) : user.middlename}
                            </td>
                            <td style={tableData}>
                                {editUserId === user.id ? (
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={userData.lastname || user.lastname}
                                        onChange={handleInputChange}
                                    />
                                ) : user.lastname}
                            </td>
                            <td style={tableData}>
                                {editUserId === user.id ? (
                                    <input
                                        type="text"
                                        name="name_ext"
                                        value={userData.name_ext || user.name_ext}
                                        onChange={handleInputChange}
                                    />
                                ) : user.name_ext}
                            </td>
                            <td style={tableData}>
                                    {editUserId === user.id ? (
                                        <select
                                            name="gender"
                                            value={userData.gender || user.gender}
                                            onChange={handleInputChange}
                                            style={selectOptions}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    ) : user.gender}
                                </td>
                                <td style={tableData}>
                                    {editUserId === user.id ? (
                                        <select
                                            name="status"
                                            value={userData.status || user.status}
                                            onChange={handleInputChange}
                                            style={selectOptions}
                                        >
                                            <option value="">Select Status</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                            <option value="Suspended">Suspended</option>
                                        </select>
                                    ) : user.status}
                                </td>

                            <td style={tdButton}>
                                {editUserId === user.id ? (
                                    <button onClick={handleSaveEdit} style={EditDeleteButton}>
                                        Save
                                    </button>
                                ) : (
                                    <button style={EditDeleteButton} onClick={() => handleEditClick(user)}>
                                        Edit
                                    </button>
                                )}
                                <button style={EditDeleteButton} onClick={() => DeleteUser(user.id)}>
                                    Delete User
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PageUsers;

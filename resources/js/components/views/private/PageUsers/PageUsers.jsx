import { DeleteOutlined, EditOutlined, ExportOutlined, FolderAddOutlined, FolderViewOutlined, PrinterOutlined, SaveOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../layouts/Header.jsx';
import {GetUsers, EditUser, DeleteUser, PrintUserTable,MultipleDeleteUser} from './tables/UserManager/UserManage.jsx';
import CertificateModal from "./Modal/CertificateModal.jsx";


const PageUsers = () => {
    const [showPrintTab, setShowPrintTab] = useState(false);
    const { users, error } = GetUsers();
    const [editUserId, setEditUserId] = useState(null);
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [showCertificateModal, setShowCertificateModal] = useState(false);  // State for showing certificate modal
    const [certificateData, setCertificateData] = useState({});  // State to hold certificate data
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
        marginLeft: "20px",
    }

    const EditDeleteButton = {
         padding: '5px',
         border: '1px solid #ccc',
         marginLeft: '10px'
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

    const PrintTab = {
        position: 'fixed',
        top: 0,
        left: 0,
         width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const printButton = {
         padding: '10px',
         border: 'solid 1px',
         borderRadius: '10px',
         marginLeft: "20px",
    }



    if (error) {
        return <div>Error: {error}</div>;
    }

    const certificateExample = {
        title: "Certificate of Appreciation",
        recipientName: "John Doe",
        description: "Thank you for participating in the testing of the website. This certificate is awarded to John Doe for their valuable contribution.",
        date: "February 2025",
    };

    const openCertificateModal = () => {
        setCertificateData(certificateExample);
        setShowCertificateModal(true);
    };


    const handleSelectUser = (userId) => {
        setSelectedUsers(prev =>
            prev.includes(userId)
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        );
    };


    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(users.map(user => user.id));
        }
        setSelectAll(!selectAll);
    };

    const handleMultipleDelete = async () => {
        const result = await MultipleDeleteUser(selectedUsers);
        if (result.success) {
            setSelectedUsers([]);
            setSelectAll(false);
        } else {
            alert(result.message || 'Failed to delete users');
        }
    };




    const handleAddUser = () => {
        navigate('/addNewUser');
    }

    const viewArchivedTable = () => {
        navigate('/archived-users');
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
                `"${(user.firstName || '').replace(/"/g, '""')}"`,
                `"${(user.middleName || '').replace(/"/g, '""')}"`,
                `"${(user.lastName || '').replace(/"/g, '""')}"`,
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
            <Button
                onClick={handleMultipleDelete}
                style={exportButton}
                icon={<DeleteOutlined />}
                disabled={selectedUsers.length === 0}
            >
                Delete Selected ({selectedUsers.length})
            </Button>
            <Button onClick={handleAddUser} style={exportButton} icon={<UserAddOutlined />}>Add User</Button>
            <Button onClick={exportToCSV} style={exportButton} icon={<ExportOutlined />} >Export to CSV</Button>
            <Button onClick={() => setShowPrintTab(true)} style={printButton} icon={<PrinterOutlined />}> Print User Table </Button>
            <Button onClick={viewArchivedTable} style={printButton} icon={<FolderViewOutlined />}>View Archive Table</Button>
            <table style={tableContainer}>
            <Button
                onClick={openCertificateModal}  // Opens the modal when clicked
                icon={<PrinterOutlined />}
                style={{ padding: '10px', margin: '10px' }}
            >
                View Certificate
            </Button>

            {/* Modal Component */}
            <CertificateModal
                isOpen={showCertificateModal}
                onClose={() => setShowCertificateModal(false)}  // Close the modal when X button is clicked
                certificate={certificateData}  // Pass the certificate data
            />
                <thead>
                    <tr style={{ backgroundColor: '#e2e8f0' }}>
                    <th style={tableHeader}>
                    <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                    />
                    </th>
                        <th style={tableHeader}>Actions</th>
                        <th style={tableHeader}>Username</th>
                        <th style={tableHeader}>Email</th>
                        <th style={tableHeader}>First Name</th>
                        <th style={tableHeader}>Middle Name</th>
                        <th style={tableHeader}>Last Name</th>
                        <th style={tableHeader}>Name Ext.</th>
                        <th style={tableHeader}>Gender</th>
                        <th style={tableHeader}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(users) && users.length > 0 ? (
                        users.map(user => (
                            <tr key={user.id} style={{ textAlign: 'center' }}>
                                 <td style={tableData}>
                                 <input
                                        type="checkbox"
                                        checked={selectedUsers.includes(user.id)}
                                        onChange={() => handleSelectUser(user.id)}
                                />
                                </td>
                                {/* <td style={tableData} ><input type="checkbox" name="ids[]" value="{{$user->id}}"/></td> */}
                                <td style={tdButton}>
                                    {editUserId === user.id ? (
                                        <Button onClick={handleSaveEdit} style={EditDeleteButton} type="primary" icon={<SaveOutlined />}>
                                            Save
                                        </Button>
                                    ) : (
                                        <Button style={EditDeleteButton} onClick={() => handleEditClick(user)} icon={<EditOutlined />}>
                                            Edit
                                        </Button>
                                    )}
                                    <Button style={EditDeleteButton} onClick={() => DeleteUser(user.id)} icon={<FolderAddOutlined />} danger>
                                        Archive
                                    </Button>
                                </td>
                                <td style={tableData}>{editUserId === user.id ? (
                                    <input type="text" name="username" value={userData.username || user.username} onChange={handleInputChange} />
                                ) : user.username}</td>
                                <td style={tableData}>{editUserId === user.id ? (
                                    <input type="email" name="email" value={userData.email || user.email} onChange={handleInputChange} />
                                ) : user.email}</td>
                                <td style={tableData}>{editUserId === user.id ? (
                                    <input type="text" name="firstName" value={userData.firstName || user.firstName} onChange={handleInputChange} />
                                ) : user.firstName}</td>
                                <td style={tableData}>{editUserId === user.id ? (
                                    <input type="text" name="middleName" value={userData.middleName || user.middleName} onChange={handleInputChange} />
                                ) : user.middleName}</td>
                                <td style={tableData}>{editUserId === user.id ? (
                                    <input type="text" name="lastName" value={userData.lastName || user.lastName} onChange={handleInputChange} />
                                ) : user.lastName}</td>
                                <td style={tableData}>{editUserId === user.id ? (
                                    <input type="text" name="name_ext" value={userData.name_ext || user.name_ext} onChange={handleInputChange} />
                                ) : user.name_ext}</td>
                                <td style={tableData}>
                                    {editUserId === user.id ? (
                                        <select name="gender" value={userData.gender || user.gender} onChange={handleInputChange} style={selectOptions}>
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    ) : user.gender}
                                </td>
                                <td style={tableData}>
                                    {editUserId === user.id ? (
                                        <select name="status" value={userData.status || user.status} onChange={handleInputChange} style={selectOptions}>
                                            <option value="">Select Status</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                            <option value="Suspended">Suspended</option>
                                        </select>
                                    ) : user.status}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9" style={{ textAlign: 'center', padding: '10px', fontStyle: 'italic', color: 'gray' }}>
                                Table Empty.
                            </td>
                        </tr>
                    )}
                </tbody>

            </table>

            {showPrintTab && (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    width: '80%',
                    maxHeight: '80vh',
                    overflowY: 'auto'
                }}>
                    <button onClick={() => setShowPrintTab(false)} style={{
                        float: 'right',
                        background: 'red',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        cursor: 'pointer'
                    }}>Close</button>
                    <PrintUserTable setShowPrintTab={setShowPrintTab} />
                </div>
            </div>
        )}
        </div>
    );
};

export default PageUsers;

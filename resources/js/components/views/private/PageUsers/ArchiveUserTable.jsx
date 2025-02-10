import React from "react";
import useArchivedUsers from "./tables/GetArchivedUsers.jsx";
import { RedoOutlined, RollbackOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { restoreUser } from "./tables/UserManager/UserManage.jsx";

const ArchivedUsersPage = () => {
    const { users, error } = useArchivedUsers();
    const navigate = useNavigate();

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
        textAlign: 'center',
    };

    const archivedUsersText = {
        fontSize: "18px",
        marginTop: "20px",
        textAlign: 'center',
    }

    const BackToUserTable = () => {
        navigate('/users');
    }
    return (
        <div style={{ padding: "20px" }}>
            <h1 style={archivedUsersText}>Archived Users Table</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Button onClick={BackToUserTable} icon={<RollbackOutlined />}>Back</Button>
            <table style={tableContainer}>
                <thead style={tableHeader}>
                    <tr>
                        <th>Actions</th>
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
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td style={tableData}>
                                <Button onClick={() => restoreUser(user.id)} icon={<RedoOutlined />}>Restore</Button>
                                </td>
                                <td style={tableData}>{user.username}</td>
                                <td style={tableData}>{user.email}</td>
                                <td style={tableData}>{user.firstName}</td>
                                <td style={tableData}>{user.middleName}</td>
                                <td style={tableData}>{user.lastName}</td>
                                <td style={tableData}>{user.name_ext}</td>
                                <td style={tableData}>{user.gender}</td>
                                <td style={tableData}>{user.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9">No archived users found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ArchivedUsersPage;

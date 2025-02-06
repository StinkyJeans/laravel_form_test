// GetUsers.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const GetUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchUsers();
    }, []);

    return { users, error };
};

export default GetUsers;

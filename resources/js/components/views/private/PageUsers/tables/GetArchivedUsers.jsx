import { useState, useEffect } from "react";
import axios from "axios";

const useArchivedUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("/api/users?only_trashed=1");
                console.log("Fetched users:", response.data);
                setUsers(response.data.users || []);
            } catch (error) {
                setError(error.message);
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    return { users, error };
};
export default useArchivedUsers;

import axios from 'axios';

const editUser = async (userId, userData) => {
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

export default editUser;

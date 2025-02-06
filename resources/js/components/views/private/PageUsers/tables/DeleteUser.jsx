import { message } from 'antd';
import axios from 'axios';

const DeleteUser = async (userId) => {
    try {
        await axios.delete(`/api/users/${userId}`);
        window.location.reload();
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

export default DeleteUser;

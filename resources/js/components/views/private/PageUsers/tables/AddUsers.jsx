import axios from 'axios';

const postUsers = async (userData) => {
    try {
        const formData = new FormData();
        formData.append('username', userData.username);
        formData.append('email', userData.email);
        formData.append('password', userData.password);
        formData.append('firstname', userData.firstname);
        formData.append('middlename', userData.middlename);
        formData.append('lastname', userData.lastname);
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
export default postUsers;

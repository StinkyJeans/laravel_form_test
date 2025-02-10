// MultipleDeleteUser.jsx
import axios from 'axios';

const MultipleDeleteUser = ({ selectedUsers, setSelectedUsers, setSelectAll }) => {
    const handleMultipleDelete = async () => {
        try {
            await axios.delete('/api/users/delete-multiple', {
                data: { ids: selectedUsers }
            });
            setSelectedUsers([]);
            setSelectAll(false);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting users:', error);
            alert('Error deleting users: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <button onClick={handleMultipleDelete}>Delete Selected</button>
    );
};

export default MultipleDeleteUser;

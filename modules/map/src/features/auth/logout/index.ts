import { useNavigate } from 'react-router-dom';

const useLogout = () => {
    const navigate = useNavigate();

    const logout = () => {
        navigate('/auth');
    };

    return { logout, status: 'success' };
};

export default useLogout;

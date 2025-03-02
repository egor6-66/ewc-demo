import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate('/workspace/incidents');
    };

    return { login, status: 'success' };
};

export default useLogin;

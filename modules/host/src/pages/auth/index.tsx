import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

const AuthPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <button onClick={() => navigate('/workspace/incidents')}>login</button>
        </div>
    );
};

export default AuthPage;

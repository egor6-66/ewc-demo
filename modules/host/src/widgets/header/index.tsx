import React from 'react';

import { useLogout } from '@/features/auth';

import styles from './styles.module.scss';

const Header = () => {
    const { logout } = useLogout();

    return (
        <div className={styles.wrapper}>
            <div>
                <button onClick={logout}>logout</button>
            </div>
        </div>
    );
};

export default Header;

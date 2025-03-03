import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

const Test = () => {
    const nav = useNavigate();

    return (
        <div className={styles.wrapper}>
            Test
            <button onClick={() => nav('a')}>a</button>
            <button onClick={() => nav('b')}>b</button>
            <Outlet />
        </div>
    );
};

export default Test;

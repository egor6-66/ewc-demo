import React from 'react';

import { useToggleStandalone } from '@/features';

import styles from './styles.module.scss';

const Tools = () => {
    const { toggle } = useToggleStandalone();

    return (
        <div className={styles.wrapper}>
            <button onClick={toggle}>toggle</button>
        </div>
    );
};

export default Tools;

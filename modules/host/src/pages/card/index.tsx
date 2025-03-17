import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@packages/ui';

import { Map } from '@/widgets';

import styles from './styles.module.scss';

const CardPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Button onClick={() => navigate(-1)}>back</Button>
            </div>
            <div className={styles.cardGroup}>
                <div className={styles.cards}>CARDS</div>
                <div className={styles.services}>
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default CardPage;

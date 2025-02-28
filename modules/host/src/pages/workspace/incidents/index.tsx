import React from 'react';

import { Wrapper } from '@/shared/ui';
import { Card, Map } from '@/widgets';

import styles from './styles.module.scss';

const IncidentsPage = () => {
    return (
        <Wrapper animationKey={'IncidentsPage'} className={styles.wrapper}>
            <div className={styles.card}>
                <Card />
            </div>
            <div className={styles.map}>
                wadw
                <Map />
            </div>
        </Wrapper>
    );
};

export default IncidentsPage;

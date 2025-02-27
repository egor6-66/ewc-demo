import React from 'react';

import { Wrapper } from '@/shared/ui';
import Map from '@/widgets/map';

import styles from './styles.module.scss';

const IncidentsPage = () => {
    return (
        <Wrapper animationKey={'IncidentsPage'} className={styles.wrapper}>
            <div className={styles.card}>card</div>
            <div className={styles.map}>
                <Map />
            </div>
        </Wrapper>
    );
};

export default IncidentsPage;

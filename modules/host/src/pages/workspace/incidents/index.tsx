import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStandalone } from '@packages/hooks';
import { Modules } from '@packages/types';
import { AnimatePresence, Button } from '@packages/ui';

import { CardPreview, CardsList, Map } from '@/widgets';

import styles from './styles.module.scss';

const IncidentsPage = () => {
    const navigate = useNavigate();

    const mapStandalone = useStandalone({ currentModule: Modules.HOST, targetModule: Modules.MAP });

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.block}>
                    <span>Карточки происшествий</span>
                    <Button onClick={() => navigate('/card/321523525')}>Создать карточку</Button>
                </div>
                <div className={styles.block}>filters</div>
            </div>
            <div className={styles.cardGroup}>
                <div className={styles.cardList}>
                    <CardsList />
                </div>
                <div className={styles.cardPreview}>
                    <CardPreview />
                </div>
            </div>
            <AnimatePresence visible={!mapStandalone.value} className={styles.map} animationVariant={'autoHeight'}>
                <Map />
            </AnimatePresence>
        </div>
    );
};

export default IncidentsPage;

import React, { useLayoutEffect } from 'react';
import { useModule, useStateCustom } from '@packages/hooks';
import { Modules } from '@packages/types';
import { AnimatePresence } from '@packages/ui';

import { CardPreview, CardsList, Map } from '@/widgets';

import styles from './styles.module.scss';

const IncidentsPage = () => {
    const mapStandalone = useStateCustom(true, {
        storage: {
            key: 'mapStandalone',
            type: 'sessionStorage',
        },
    });

    const toggleMapStandalone = (data: { payload: { standalone: boolean } }) => mapStandalone.set(data.payload.standalone);

    const module = useModule<Modules>(Modules.HOST, {
        events: {
            toggleStandalone: {
                modules: [Modules.MAP],
                callback: toggleMapStandalone,
            },
        },
    });

    useLayoutEffect(() => {
        module
            .send({ target: Modules.MAP, eventName: 'checkStandalone', waitingTimer: 250 })
            .then(toggleMapStandalone)
            .catch(() => {
                toggleMapStandalone({ payload: { standalone: false } });
            });
    }, []);

    return (
        <div className={styles.wrapper}>
            <button onClick={() => mapStandalone.set((prev) => !prev)}>dwad</button>
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

import React, { useLayoutEffect } from 'react';
import { useModule, useStateCustom } from '@packages/hooks';
import { Modules } from '@packages/types';
import { AnimatePresence } from '@packages/ui';

import { CardPreview, CardsList, Map } from '@/widgets';

import styles from './styles.module.scss';

const IncidentsPage = () => {
    const mapStandalone = useStateCustom(false);

    const toggleMapStandalone = (data: { standalone: boolean }) => mapStandalone.set(data.standalone);

    const module = useModule<Modules>(Modules.HOST, {
        events: {
            toggleStandalone: {
                modules: [Modules.MAP],
                callback: toggleMapStandalone,
            },
        },
    });

    useLayoutEffect(() => {
        module.send({ target: Modules.MAP, eventName: 'checkStandalone', waitingTimer: 250 }).catch(() => {
            toggleMapStandalone({ standalone: false });
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

import React, { useEffect } from 'react';
import { useModule, useStateCustom } from '@packages/hooks';
import { Modules } from '@packages/types';
import { AnimatePresence, motion } from 'framer-motion';

import { CardPreview, CardsList, Map } from '@/widgets';

import styles from './styles.module.scss';

const IncidentsPage = () => {
    const mapStandalone = useStateCustom(true);

    const toggleMapStandalone = (data: { standalone: boolean }, from: Modules) => {
        if (from === 'MAP') {
            mapStandalone.set(data.standalone);
        }
    };

    const module = useModule(Modules.HOST, {
        events: {
            toggleStandalone: toggleMapStandalone,
        },
    });

    useEffect(() => {
        module.send({ target: Modules.MAP, eventName: 'checkStandalone', waitingTimer: 250 }).catch(() => {
            toggleMapStandalone({ standalone: false }, Modules.MAP);
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
            <AnimatePresence initial={false}>
                {!mapStandalone.value && (
                    <motion.div initial={{ height: 0 }} className={styles.map} animate={{ height: '100%' }} exit={{ height: 0 }}>
                        <Map />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default IncidentsPage;

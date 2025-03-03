import React, { useEffect } from 'react';
import { useCustomState, useModule, useRPC, useSharedStorage } from '@packages/hooks';
import { Modules } from '@packages/types';
import { AnimatePresence, motion } from 'framer-motion';

import { Wrapper } from '@/shared/ui';
import { Card, Map } from '@/widgets';

import styles from './styles.module.scss';

const IncidentsPage = () => {
    const standaloneWidgets = useCustomState({
        [Modules.MAP]: true,
        [Modules.CARD]: true,
    });

    const toggleStandalone = (data: { standalone: boolean }, from: Modules) => {
        standaloneWidgets.set((prev) => ({ ...prev, [from]: data.standalone }));
    };

    const module = useModule(Modules.HOST, {
        events: {
            toggleStandalone: toggleStandalone,
        },
    });

    const widgets = [
        { id: 0, name: Modules.CARD, element: <Card /> },
        { id: 1, name: Modules.MAP, element: <Map /> },
    ];

    useEffect(() => {
        module.send({ target: Modules.MAP, eventName: 'checkStandalone', waitingTimer: 500 }).catch((err) => {
            standaloneWidgets.set((prev) => ({ ...prev, [Modules.MAP]: false }));
        });
    }, []);

    return (
        <div className={styles.wrapper}>
            <AnimatePresence initial={false} propagate={false}>
                {widgets.map(
                    ({ id, name, element }) =>
                        !standaloneWidgets.value[name] && (
                            <motion.div key={id} className={styles.widget} initial={{ height: 0 }} animate={{ height: '100%' }} exit={{ height: 0 }}>
                                {element}
                            </motion.div>
                        )
                )}
            </AnimatePresence>
        </div>
    );
};

export default IncidentsPage;

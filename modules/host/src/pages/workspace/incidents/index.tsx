import React, { ReactNode, useEffect } from 'react';
import { useCustomState, useModule } from '@packages/hooks';
import { Modules } from '@packages/types';
import { AnimatePresence, motion } from 'framer-motion';

import { Wrapper } from '@/shared/ui';
import { Card, Map } from '@/widgets';

import styles from './styles.module.scss';

const IncidentsPage = () => {
    const loading = useCustomState(true);

    const widgets = useCustomState<Record<string, { element: ReactNode; standalone: boolean }>>({
        [Modules.CARD]: { element: <Card />, standalone: true },
        [Modules.MAP]: { element: <Map />, standalone: true },
    });

    const toggleStandalone = (data: { standalone: boolean }, from: Modules) => {
        const updWidgets = { ...widgets.value };
        updWidgets[from].standalone = data.standalone;
        widgets.set(updWidgets);
    };

    const module = useModule(Modules.HOST, {
        events: {
            toggleStandalone: toggleStandalone,
        },
    });

    useEffect(() => {
        Promise.allSettled(Object.keys(widgets.value).map((name) => module.send({ target: name, eventName: 'checkStandalone', waitingTimer: 250 }))).then(
            (res) => {
                const updWidgets = { ...widgets.value };
                res.forEach((i) => {
                    if (i.status === 'rejected') {
                        updWidgets[i.reason.module].standalone = false;
                    }
                });
                widgets.set(updWidgets);
                setTimeout(() => {
                    loading.set(false);
                }, 500);
            }
        );
    }, []);

    return (
        <div className={styles.wrapper}>
            <AnimatePresence initial={false}>{loading.value && <Wrapper className={styles.loading}>LOADING</Wrapper>}</AnimatePresence>
            <AnimatePresence initial={false}>
                {Object.entries(widgets.value).map(
                    ([name, { element, standalone }]: any) =>
                        !standalone && (
                            <motion.div initial={{ height: 0 }} key={name} className={styles.widget} animate={{ height: '100%' }} exit={{ height: 0 }}>
                                {element}
                            </motion.div>
                        )
                )}
            </AnimatePresence>
        </div>
    );
};

export default IncidentsPage;

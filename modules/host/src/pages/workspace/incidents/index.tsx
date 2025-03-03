import React, { useEffect } from 'react';
import { useCustomState, useModule, useRPC } from '@packages/hooks';
import { Modules } from '@packages/types';
import { AnimatePresence, motion } from 'framer-motion';

import { Wrapper } from '@/shared/ui';
import { Card, Map } from '@/widgets';

import styles from './styles.module.scss';

const IncidentsPage = () => {
    const module = useModule({
        events: {
            test: (data: any) => {
                console.log('testEvent', data);
            },
        },
    });

    const toggleStandalone = (data: { standalone: boolean }, from: Modules) => {
        // standAlone.set((prev) => ({ ...prev, [from]: data.standalone }));
    };

    const widgets = [
        { id: 0, name: Modules.CARD, element: <Card /> },
        { id: 1, name: Modules.MAP, element: <Map /> },
    ];

    return (
        <Wrapper animationKey={'IncidentsPage'} className={styles.wrapper}>
            {widgets.map(({ id, name, element }) => (
                <AnimatePresence key={id} initial={false}>
                    {/*{!standAlone.value[name] && (*/}
                    <motion.div className={styles.widget} initial={{ height: 0 }} animate={{ height: '100%' }} exit={{ height: 0 }}>
                        {element}
                    </motion.div>
                    {/*)}*/}
                </AnimatePresence>
            ))}
        </Wrapper>
    );
};

export default IncidentsPage;

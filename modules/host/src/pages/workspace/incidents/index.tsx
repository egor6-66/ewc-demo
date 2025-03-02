import React from 'react';
import { useCustomState, useRPC } from '@packages/hooks';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

import { Wrapper } from '@/shared/ui';
import { Card, Map } from '@/widgets';
import card from '@/widgets/card';

import styles from './styles.module.scss';

const IncidentsPage = () => {
    const mapStandAlone = useCustomState(false);
    const cardStandAlone = useCustomState(false);

    const toggleVisibleWidgets = (data: { standAlone: boolean }, from: string) => {
        console.log(data, from);
        if (from === 'MAP') mapStandAlone.set(data.standAlone);
    };

    useRPC({
        currentModule: 'HOST',
        events: {
            toggleView: { event: toggleVisibleWidgets },
        },
    });

    const widgets = [
        { id: 0, element: <Card />, visible: !cardStandAlone.value },
        { id: 1, element: <Map />, visible: !mapStandAlone.value },
    ];

    return (
        <Wrapper animationKey={'IncidentsPage'} className={styles.wrapper}>
            {widgets.map(({ id, element, visible }) => (
                <AnimatePresence key={id} initial={false}>
                    {visible && (
                        <motion.div className={styles.widget} initial={{ height: 0 }} animate={{ height: '100%' }} exit={{ height: 0 }}>
                            {element}
                        </motion.div>
                    )}
                </AnimatePresence>
            ))}
        </Wrapper>
    );
};

export default IncidentsPage;

import React from 'react';
import { useRouting, useStandalone } from '@packages/hooks';
import { Modules } from '@packages/types';
import { AnimatePresence, Button, GridLayout, IGridLayout } from '@packages/ui';

import { CardPreview, CardsList, Map } from '@/widgets';

import styles from './styles.module.scss';

const IncidentsPage = () => {
    const { navigateWithParam } = useRouting();

    const mapStandalone = useStandalone({ currentModule: Modules.HOST, targetModule: Modules.MAP });

    const widgets: IGridLayout.Items = [
        { name: 'card_list', grid: { x: 1, y: 1, h: 11, w: 3 } },
        { name: 'card_preview', grid: { x: 2, y: 1, h: 11, w: 1 } },
        { name: 'map', grid: { x: 1, y: 2, h: 9, w: 4 } },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.createCard}>
                    <span>Карточки происшествий</span>
                    <Button onClick={() => navigateWithParam('/card/', 'cardId', 'YKIO')}>Создать карточку</Button>
                </div>
                <div className={styles.block}>filters</div>
            </div>
            <div className={styles.gridContainer}>
                <GridLayout items={widgets} className={styles.grid}>
                    {(item) => {
                        switch (item.name) {
                            case 'card_list':
                                return <CardsList />;

                            case 'card_preview':
                                return <CardPreview />;

                            case 'map':
                                return (
                                    <AnimatePresence visible={!mapStandalone.value} className={styles.map} animationVariant={'fullHeight'}>
                                        <Map />
                                    </AnimatePresence>
                                );
                        }
                    }}
                </GridLayout>
            </div>
        </div>
    );
};

export default IncidentsPage;

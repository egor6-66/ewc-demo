import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppState } from '@packages/components';
import { useRouting } from '@packages/hooks';
import { AnimatePresence, ITab, Tabs } from '@packages/ui';

import CardPage from './card';

import styles from './styles.module.scss';

const Pages = () => {
    const { navigate, navigateWithParam, location, getParams } = useRouting();
    const params = getParams();

    const tebItems: ITab.Items = [
        { name: 'YKIO', displayName: 'УКИО' },
        { name: 'BASE', displayName: 'Базовый шаблон' },
        { name: 'RECURSIVE', displayName: 'Много вложенностей' },
        { name: 'CUSTOM', displayName: 'Кастомный' },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.appState}>
                <AppState operatorName={'112 Санкт-Петербург'} />
            </div>
            <div className={styles.tab} onClick={() => navigate(`/workspace/incidents`)}>
                BACk
            </div>
            <Tabs
                items={tebItems}
                activeItem={params.cardId}
                handleTabClick={(item) => navigateWithParam('/card/', 'cardId', item.name)}
                className={styles.tabs}
            >
                <div className={styles.cardContainer}>
                    <AnimatePresence className={styles.main} animationKey={params.cardId} visible={true}>
                        <Routes location={location} key={params.cardId}>
                            <Route path="card/cardId/:id" element={<CardPage />} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </Tabs>
        </div>
    );
};

export default Pages;

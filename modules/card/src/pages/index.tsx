import React from 'react';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AppState } from '@packages/components';
import { AnimatePresence, ITab, Tabs } from '@packages/ui';

import CardPage from './card';

import styles from './styles.module.scss';

const Pages = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const animationKey = location.pathname.split('/')[2];

    const tebItems: ITab.Items = [
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
            <Tabs items={tebItems} activeItem={params.cardId} handleTabClick={(item) => navigate(`/card/${item.name}`)} className={styles.tabs}>
                <AnimatePresence className={styles.main} animationKey={animationKey} visible={true}>
                    <Routes location={location} key={animationKey}>
                        <Route path="card/:cardId" element={<CardPage />} />
                    </Routes>
                </AnimatePresence>
            </Tabs>
        </div>
    );
};

export default Pages;

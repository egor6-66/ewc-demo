import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from '@packages/ui';

import CardPage from './card';

import styles from './styles.module.scss';

const Pages = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const animationKey = location.pathname.split('/')[1];

    const tabs = [
        { id: 'fesf3', type: '112' },
        { id: '3rfed', type: '01' },
        { id: '2rdad', type: '02' },
        { id: 'da3ed', type: '03' },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.tabs}>
                <div className={styles.tab} onClick={() => navigate(`/workspace/incidents`)}>
                    BACk
                </div>
                {tabs.map((tab) => (
                    <div className={styles.tab} key={tab.id} onClick={() => navigate(`/card/${tab.type}/${tab.id}`)}>
                        {tab.type}
                    </div>
                ))}
            </div>
            <AnimatePresence className={styles.main} animationKey={animationKey} visible={true}>
                <Routes location={location} key={animationKey}>
                    <Route path="card/:cardType/:cardId" element={<CardPage />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default Pages;

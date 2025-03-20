import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AppState } from '@packages/components';
import { AnimatePresence } from '@packages/ui';

import CardPage from './card';

import styles from './styles.module.scss';

const Pages = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const animationKey = location.pathname.split('/')[1];

    const variants = ['BASE', 'RECURSIVE', 'CUSTOM'];

    return (
        <div className={styles.wrapper}>
            <div className={styles.appState}>
                <AppState operatorName={'112 Санкт-Петербург'} />
            </div>
            <div className={styles.tabs}>
                <div className={styles.tab} onClick={() => navigate(`/workspace/incidents`)}>
                    BACk
                </div>
                {variants.map((variant) => (
                    <div className={styles.tab} key={variant} onClick={() => navigate(`/card/${variant}`)}>
                        {variant}
                    </div>
                ))}
            </div>
            <AnimatePresence className={styles.main} animationKey={animationKey} visible={true}>
                <Routes location={location} key={animationKey}>
                    <Route path="card/:cardId" element={<CardPage />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default Pages;

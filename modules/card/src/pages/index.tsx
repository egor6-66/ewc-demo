import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from '@packages/ui';

import CardPage from './card';

import styles from './styles.module.scss';

const Pages = () => {
    const location = useLocation();
    const animationKey = location.pathname.split('/')[1];

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>info</div>
            <AnimatePresence className={styles.main} animationKey={animationKey} visible={true}>
                <Routes location={location} key={animationKey}>
                    <Route path="card/:cardType/:cardId" element={<CardPage />} />
                </Routes>
            </AnimatePresence>
            <div className={styles.shortInfo}>shortInfo</div>
        </div>
    );
};

export default Pages;

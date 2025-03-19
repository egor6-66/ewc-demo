import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AppState } from '@packages/components';
import { AnimatePresence } from '@packages/ui';

import AuthPage from './auth';
import CardPage from './card';
import WorkspacePage from './workspace';

import styles from './styles.module.scss';

const Pages = () => {
    const location = useLocation();
    const animationKey = location.pathname.split('/')[1];

    return (
        <div className={styles.wrapper}>
            <AnimatePresence className={styles.main} animationKey={animationKey} visible={true}>
                <Routes location={location} key={animationKey}>
                    <Route path="*" element={<Navigate to={'auth'} />} />
                    <Route path="auth/*" element={<AuthPage />} />
                    <Route path="workspace/*" element={<WorkspacePage />} />
                    <Route path="card/:cardId" element={<CardPage />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default Pages;

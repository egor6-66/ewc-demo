import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AppState } from '@packages/components';
import { AnimatePresence, INavigation, Navigation } from '@packages/ui';

import IncidentsPage from './incidents';
import ReportsPage from './reports';

import styles from './styles.module.scss';

const WorkspacePage = () => {
    const location = useLocation();

    const currentPathSegment = location.pathname.split('/')[2];

    const navItems: INavigation.Items = [
        { name: 'incidents', displayName: 'ПРОИСШЕСТВИЯ' },
        { name: 'reports', displayName: 'ОТЧЕТЫ' },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.appState}>
                <AppState operatorName={'112 Санкт-Петербург'} />
            </div>
            <div className={styles.navigations}>
                <Navigation id={'WorkspacePage'} items={navItems} />
            </div>
            <AnimatePresence visible={true} className={styles.content} animationKey={currentPathSegment}>
                <Routes location={location} key={currentPathSegment}>
                    <Route path="incidents/*" element={<IncidentsPage />} />
                    <Route path="reports/*" element={<ReportsPage />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default WorkspacePage;

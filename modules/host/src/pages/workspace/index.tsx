import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppState } from '@packages/components';
import { useRouting } from '@packages/hooks';
import { AnimatePresence, INavigation, Navigation } from '@packages/ui';

import IncidentsPage from './incidents';
import ReportsPage from './reports';

import styles from './styles.module.scss';

const WorkspacePage = () => {
    const { getSegment, location } = useRouting();
    const animationKey = getSegment(2);

    const navItems: INavigation.Items = [
        { name: 'incidents', displayName: 'ПРОИСШЕСТВИЯ' },
        { name: 'reports', displayName: 'ОТЧЕТЫ' },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.appState}>
                <AppState operatorName={'112 Санкт-Петербург'} />
            </div>
            <Navigation items={navItems} className={styles.navigations}>
                <AnimatePresence visible={true} className={styles.content} animationKey={animationKey}>
                    <Routes location={location} key={animationKey}>
                        <Route path="incidents/*" element={<IncidentsPage />} />
                        <Route path="reports/*" element={<ReportsPage />} />
                    </Routes>
                </AnimatePresence>
            </Navigation>
        </div>
    );
};

export default WorkspacePage;

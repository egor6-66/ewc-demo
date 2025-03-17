import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, INavigation, Navigation } from '@packages/ui';

import IncidentsPage from './incidents';
import ReportsPage from './reports';

import styles from './styles.module.scss';

const WorkspacePage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const currentPathSegment = location.pathname.split('/')[2];

    const changeTabs = (tab: INavigation.IItem) => {
        currentPathSegment !== tab.name && navigate(String(tab.name));
    };

    const checkActive = (tab: INavigation.IItem) => {
        return currentPathSegment === tab.name;
    };

    const navItems: INavigation.Items = [
        { name: 'incidents', displayName: 'ПРОИСШЕСТВИЯ', checkActive, onClick: changeTabs },
        { name: 'reports', displayName: 'ОТЧЕТЫ', checkActive, onClick: changeTabs },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.navigations}>
                <Navigation id={'WorkspacePage'} items={navItems} />
            </div>
            <AnimatePresence visible={true} className={styles.content} animationKey={currentPathSegment}>
                <Routes location={location} key={currentPathSegment}>
                    <Route path="incidents*" element={<IncidentsPage />} />
                    <Route path="reports*" element={<ReportsPage />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default WorkspacePage;

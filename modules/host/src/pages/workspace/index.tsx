import React from 'react';
import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useThemes } from '@packages/hooks';
import { Tabs } from '@packages/ui';
import { AnimatePresence } from '@packages/ui';

import Footer from '../../widgets/footer';

import IncidentsPage from './incidents';
import ReportsPage from './reports';

import styles from './styles.module.scss';

const WorkspacePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const animationKey = location.pathname.split('/')[2];
    const themes = useThemes();

    const changeTabs = (path: string) => {
        navigate(path);
    };

    const tabs = [
        { id: 0, title: 'incidents', path: 'incidents' },
        { id: 1, title: 'reports', path: 'reports' },
        { id: 2, title: 'logout', path: '/auth' },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.tabs}>
                {tabs.map((i) => (
                    <button key={i.id} onClick={() => changeTabs(i.path)}>
                        {i.title}
                    </button>
                ))}
                <button onClick={themes.toggleBlackAndWhite}>set theme</button>
            </div>

            <AnimatePresence animationKey={animationKey} visible={true} className={styles.main}>
                <Routes location={location} key={animationKey}>
                    <Route path="incidents" element={<IncidentsPage />} />
                    <Route path="reports" element={<ReportsPage />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default WorkspacePage;

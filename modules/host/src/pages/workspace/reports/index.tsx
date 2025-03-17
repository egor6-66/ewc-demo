import React, { useEffect, useMemo } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, ITab, Navigation, Tabs } from '@packages/ui';

import { useGetReports } from '@/features/reports';
import { Reports } from '@/widgets';

import styles from './styles.module.scss';

const ReportsPage = () => {
    const { data: reportsConfig } = useGetReports();

    const navigate = useNavigate();
    const location = useLocation();

    const currentPathSegment = location.pathname.split('/')[3];

    const parseTabs = useMemo<ITab.Tabs>(() => {
        if (reportsConfig) {
            return reportsConfig.tabs.map((tab) => ({
                ...tab,
                onClick: () => currentPathSegment !== tab.name && navigate(String(tab.name)),
                checkActive: () => currentPathSegment === tab.name,
            }));
        }

        return [];
    }, [reportsConfig, currentPathSegment]);

    useEffect(() => {
        if (parseTabs?.length && !currentPathSegment) {
            navigate(parseTabs[0].name);
        }
    }, [parseTabs]);

    return (
        <div className={styles.wrapper}>
            {/*<div className={styles.navigations}>*/}
            <Navigation id={'ReportsPage'} items={parseTabs} />
            {/*</div>*/}
            <AnimatePresence visible={true} className={styles.content} animationKey={currentPathSegment}>
                <Routes location={location} key={currentPathSegment}>
                    <Route path="/:id" element={<Reports reports={reportsConfig?.tabs.find((i) => i.name === currentPathSegment)?.reports} />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default ReportsPage;

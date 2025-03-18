import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, Navigation } from '@packages/ui';

import { useGetReports } from '@/features/reports';
import { Reports } from '@/widgets';

import styles from './styles.module.scss';

const ReportsPage = () => {
    const { data: reportsConfig } = useGetReports();

    const navigate = useNavigate();
    const location = useLocation();

    const currentPathSegment = location.pathname.split('/')[3];

    useEffect(() => {
        if (reportsConfig?.tabs?.length && !currentPathSegment) {
            navigate(reportsConfig.tabs[0].name);
        }
    }, [reportsConfig?.tabs]);

    return (
        <div className={styles.wrapper}>
            <Navigation id={'ReportsPage'} items={reportsConfig?.tabs} />
            <AnimatePresence visible={true} className={styles.content} animationKey={currentPathSegment}>
                <Routes location={location} key={currentPathSegment}>
                    <Route path="/:id" element={<Reports reports={reportsConfig?.tabs.find((i) => i.name === currentPathSegment)?.reports} />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default ReportsPage;

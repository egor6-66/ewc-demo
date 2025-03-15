import React, { useEffect, useLayoutEffect, useMemo } from 'react';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, ITab, Tabs } from '@packages/ui';

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
        <Tabs id={'ReportsPageTabs'} tabs={parseTabs} classes={{ wrapper: styles.wrapper, children: styles.reportsContainer }}>
            <AnimatePresence className={styles.reports} animationKey={currentPathSegment} visible={true} duration={0.15}>
                <Routes location={location} key={currentPathSegment}>
                    <Route path=":tabReportId" element={<Reports reports={reportsConfig?.tabs.find((i) => i.name === currentPathSegment)?.reports} />} />
                </Routes>
            </AnimatePresence>
        </Tabs>
    );
};

export default ReportsPage;

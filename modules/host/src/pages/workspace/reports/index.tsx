import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRouting } from '@packages/hooks';
import { AnimatePresence, Tabs } from '@packages/ui';

import { useGetReports } from '@/features/reports';
import { Reports } from '@/widgets';

import styles from './styles.module.scss';

const ReportsPage = () => {
    const { data: reportsConfig } = useGetReports();

    const { navigateWithParam, location, getParams } = useRouting();
    const params = getParams();

    useEffect(() => {
        if (reportsConfig?.tabs?.length) {
            navigateWithParam('reports/', 'reportId', reportsConfig.tabs[0].name);
        }
    }, [reportsConfig?.tabs]);

    return (
        <div className={styles.wrapper}>
            <Tabs
                items={reportsConfig?.tabs || []}
                activeItem={params.reportId}
                handleTabClick={(item) => navigateWithParam('reports/', 'reportId', item.name)}
                className={styles.tabs}
            >
                <div className={styles.reportsContainer}>
                    <AnimatePresence visible={true} className={styles.content} animationKey={params.reportId}>
                        <Routes location={location} key={params.reportId}>
                            <Route
                                path="/reports/reportId/:id"
                                element={<Reports reports={reportsConfig?.tabs.find((i) => i.name === params.reportId)?.reports} />}
                            />
                        </Routes>
                    </AnimatePresence>
                </div>
            </Tabs>
        </div>
    );
};

export default ReportsPage;

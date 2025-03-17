import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ITab, Tabs } from '@packages/ui';

import IncidentsPage from './incidents';
import ReportsPage from './reports';

import styles from './styles.module.scss';

const WorkspacePage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const currentPathSegment = location.pathname.split('/')[2];

    const changeTabs = (tab: ITab.ITab) => {
        currentPathSegment !== tab.name && navigate(String(tab.name));
    };

    const checkActive = (tab: ITab.ITab) => {
        return currentPathSegment === tab.name;
    };

    const tabs: ITab.Tabs = [
        { name: 'incidents', displayName: 'ПРОИСШЕСТВИЯ', checkActive, onClick: changeTabs },
        { name: 'reports', displayName: 'ОТЧЕТЫ', checkActive, onClick: changeTabs },
        { name: '/auth', displayName: 'LOGOUT', checkActive, onClick: changeTabs },
    ];

    return (
        <Tabs childAnimationKey={currentPathSegment} tabs={tabs} classes={{ wrapper: styles.wrapper, children: styles.main }}>
            <Routes location={location} key={currentPathSegment}>
                <Route path="incidents*" element={<IncidentsPage />} />
                <Route path="reports*" element={<ReportsPage />} />
            </Routes>
        </Tabs>
    );
};

export default WorkspacePage;

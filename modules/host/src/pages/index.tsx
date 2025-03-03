import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import IncidentsPage from './workspace/incidents';
import ReportsPage from './workspace/reports';
import AuthPage from './auth';
import WorkspacePage from './workspace';

const Pages = () => {
    const routes = useRoutes([
        { path: '*', element: <Navigate to={'auth'} /> },
        { path: 'auth', element: <AuthPage /> },
        {
            path: 'workspace',
            element: <WorkspacePage />,
            children: [
                { path: 'incidents', element: <IncidentsPage /> },
                { path: 'reports', element: <ReportsPage /> },
            ],
        },
    ]);

    return <AnimatePresence mode={'wait'}>{routes}</AnimatePresence>;
};

export default Pages;

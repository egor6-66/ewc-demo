import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import IncidentsPage from './workspace/incidents';
import ReportsPage from './workspace/reports';
import WorkspacePage from './workspace';

const Pages = () => {
    return useRoutes([
        { path: '*', element: <Navigate to={'auth'} /> },
        {
            path: 'workspace',
            element: <WorkspacePage />,
            children: [
                { path: 'incidents', element: <IncidentsPage /> },
                { path: 'reports', element: <ReportsPage /> },
            ],
        },
    ]);
};

export default Pages;

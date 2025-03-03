import React, { memo } from 'react';
import { useModuleLoader } from '@packages/hooks';

import Fallback from './fallback';

import styles from './styles.module.scss';

const Map = memo(() => {
    const { Module } = useModuleLoader({
        url: process.env.MAP_MODULE_URL,
        scope: 'map',
        module: './Map',
        errorComponent: <Fallback isError />,
        loadingComponent: <Fallback isLoading />,
        moduleProps: {
            test: 'uraaaaa',
        },
    });

    return (
        <div className={styles.wrapper}>
            <Module />
        </div>
    );
});

export default Map;

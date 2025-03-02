import React, { memo } from 'react';
import { useModuleLoader } from '@packages/hooks';

import styles from './styles.module.scss';

const Map = memo(() => {
    console.log(process.env.MAP_MODULE_URL);

    const { Module } = useModuleLoader({
        url: process.env.MAP_MODULE_URL,
        scope: 'map',
        module: './Map',
        errorComponent: <div>error</div>,
        loadingComponent: <div>loading</div>,
        onError: () => {
            console.log('error card module');
        },
    });

    console.log(Module());

    return (
        <div className={styles.wrapper}>
            <Module />
        </div>
    );
});

export default Map;

import React, { memo } from 'react';
import { useModuleLoader } from '@packages/hooks';

import styles from './styles.module.scss';

const Map = memo(() => {
    const { status, Module } = useModuleLoader({
        url: 'http://localhost/map/remoteEntry.js',
        scope: 'card',
        module: './Card',
        errorComponent: <div>error</div>,
        loadingComponent: <div>loading</div>,
    });

    return (
        <div className={styles.wrapper}>
            <Module />
        </div>
    );
});

export default Map;

import React, { memo } from 'react';
import { useModuleLoader } from '@packages/hooks';

import styles from './styles.module.scss';

const Map = memo(() => {
    const { Module } = useModuleLoader({
        url: process.env.CARD_MODULE_URL,
        scope: 'card',
        module: './Card',
        errorComponent: <div>error</div>,
        loadingComponent: <div>loading</div>,
        onError: () => {
            console.log('error card module');
        },
    });

    return (
        <div className={styles.wrapper}>
            <Module />
        </div>
    );
});

export default Map;

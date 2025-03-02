import React, { memo } from 'react';
import { useModuleLoader } from '@packages/hooks';

import Fallback from './fallback';

import styles from './styles.module.scss';

const Card = memo(() => {
    const { Module } = useModuleLoader({
        url: process.env.CARD_MODULE_URL,
        scope: 'card',
        module: './Card',
        errorComponent: <Fallback isError />,
        loadingComponent: <Fallback isLoading />,
    });

    return (
        <div className={styles.wrapper}>
            <Module />
        </div>
    );
});

export default Card;

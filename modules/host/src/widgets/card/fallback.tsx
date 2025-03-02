import React from 'react';

import { IFallbackProps } from './interfaces';

import styles from './styles.module.scss';

const Fallback = (props: IFallbackProps) => {
    const { isLoading, isError } = props;

    return (
        <div className={styles.wrapper}>
            {isLoading && 'LOADING'}
            {isError && 'Не удалось загрузить модуль карты происшествия'}
        </div>
    );
};

export default Fallback;

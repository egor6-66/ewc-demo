import React, { PropsWithChildren } from 'react';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Button = (props: PropsWithChildren<IProps>) => {
    const { children, isLoading, ...attrs } = props;

    return (
        <button className={styles.wrapper} {...attrs}>
            {children}
        </button>
    );
};

export default Button;

import React, { forwardRef, PropsWithChildren } from 'react';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Button = forwardRef((props: PropsWithChildren<IProps>, ref) => {
    const { children, isLoading, ...attrs } = props;

    return (
        <button className={styles.wrapper} {...attrs}>
            {children}
        </button>
    );
});

export default Button;

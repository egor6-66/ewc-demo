import React, { forwardRef, PropsWithChildren } from 'react';

import Icons from '../icons';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Button = forwardRef((props: PropsWithChildren<IProps>, ref) => {
    const { iconName, children, isLoading, ...attrs } = props;

    return (
        <button className={styles.wrapper} {...attrs}>
            {iconName && <Icons icon={iconName} />}
            {children}
        </button>
    );
});

export default Button;

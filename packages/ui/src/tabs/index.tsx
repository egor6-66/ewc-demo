import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Tabs = (props: PropsWithChildren<IProps>) => {
    const { children, classes } = props;

    return (
        <div className={classNames(styles.wrapper, classes.wrapper)}>
            <div className={classNames(styles.children, classes.children)}>{children}</div>
        </div>
    );
};

export default Tabs;

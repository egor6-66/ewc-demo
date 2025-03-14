import React from 'react';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Checkbox = (props: IProps) => {
    const { isLoading, displayName, ...attrs } = props;

    return (
        <div className={styles.wrapper}>
            <span>{displayName}</span>
            <input className={styles.checkbox} {...attrs} type="checkbox" />
        </div>
    );
};

export default Checkbox;

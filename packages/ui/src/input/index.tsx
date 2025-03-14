import React from 'react';
import classNames from 'classnames';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Input = (props: IProps) => {
    const { isLoading, displayName, disabled, ...attrs } = props;

    const wrapperClasses = classNames({
        [styles.wrapper]: true,
    });

    const inputClasses = classNames({
        [styles.input]: true,
        [styles.disabled]: disabled,
    });

    return (
        <div className={wrapperClasses}>
            <span>{displayName}</span>
            <input className={inputClasses} {...attrs} />
        </div>
    );
};

export default Input;

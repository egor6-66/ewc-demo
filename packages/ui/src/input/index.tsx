import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Input = forwardRef((props: IProps, ref) => {
    const { id, isLoading, displayName, disabled, ...attrs } = props;

    const wrapperClasses = classNames({
        [styles.wrapper]: true,
    });

    const inputClasses = classNames({
        [styles.input]: true,
    });

    return (
        <div id={id} className={wrapperClasses} data-disabled={disabled}>
            <span>{displayName}</span>
            <input className={inputClasses} {...attrs} />
        </div>
    );
});

export default Input;

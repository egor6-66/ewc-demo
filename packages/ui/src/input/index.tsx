import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const defaultStyle = {
    minWidth: 250,
};

const Input = forwardRef((props: IProps, ref) => {
    const { id, isLoading, displayName, disabled, wrapperStyles, nameStyles = {}, ...attrs } = props;

    const wrapperClasses = classNames({
        [styles.wrapper]: true,
    });

    const inputClasses = classNames({
        [styles.input]: true,
    });

    return (
        <div id={id} className={wrapperClasses} data-disabled={disabled} style={wrapperStyles}>
            <span className={styles.name} style={{ ...nameStyles }}>
                {displayName}
            </span>
            <input className={inputClasses} style={defaultStyle} {...attrs} />
        </div>
    );
});

export default Input;

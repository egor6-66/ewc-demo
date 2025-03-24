import React, { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';

import Icons from '../icons';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Button = forwardRef((props: PropsWithChildren<IProps>, ref) => {
    const { iconName, children, isLoading, ...attrs } = props;

    const wrapperClasses = classNames({
        [styles.wrapper]: true,
    });

    return (
        <button className={wrapperClasses} {...attrs}>
            {iconName && <Icons icon={iconName} />}
            {children}
        </button>
    );
});

export default Button;

import React from 'react';
import classNames from 'classnames';

import Items from '../index';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Group = (props: IProps) => {
    const { item, control, isFirstLvl, itemIndex, grid, version } = props;

    const isFirst = itemIndex === 0;

    const wrapperClasses = classNames({
        [styles.wrapper]: true,
        [styles.wrapper_firstLvl]: isFirstLvl,
        [styles.wrapper_firstElement]: isFirst,
    });

    return (
        <div className={wrapperClasses} style={{ ...grid, ...item?.style }}>
            {item.displayName && (
                <div className={styles.header}>
                    <div className={styles.name}>{item.displayName}</div>
                    <div className={styles.line} />
                    {version && isFirst && <div className={styles.version}>{version.description}</div>}
                </div>
            )}

            <Items control={control} item={item} isFirstLvl={false} />
        </div>
    );
};

export default Group;

import React from 'react';
import classNames from 'classnames';

import Items from '../index';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Group = (props: IProps) => {
    const { item, control, isFirstLvl, grid, itemIndex } = props;

    const classes = classNames({
        [styles.wrapper]: true,
        [styles.wrapper_firstLvl]: isFirstLvl,
        [styles.wrapper_firstElement]: itemIndex === 0,
    });

    return (
        <div className={classes} style={{ ...grid, ...item?.styles }}>
            {item.displayName && <div className={styles.name}>{item.displayName}</div>}
            <div className={styles.items}>
                <Items control={control} items={item?.items || []} isFirstLvl={false} />
            </div>
        </div>
    );
};

export default Group;

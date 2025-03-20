import React from 'react';
import classNames from 'classnames';

import Items from '../index';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Group = (props: IProps) => {
    const { item, control, isFirstLvl } = props;

    const classes = classNames({
        [styles.wrapper]: true,
        [styles.wrapper_firstLvl]: isFirstLvl,
    });

    const grid = {
        gridColumnStart: item.grid?.column,
        gridRowStart: item.grid?.row,
    };

    return (
        <div className={classes} style={grid}>
            <div className={styles.name}>{item.displayName}</div>
            <div className={styles.items}>
                <Items control={control} items={item?.items || []} isFirstLvl={false} />
            </div>
        </div>
    );
};

export default Group;

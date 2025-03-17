import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Navigation = (props: IProps) => {
    const { id, items } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.items}>
                {items.map((item) => {
                    const isActive = item.checkActive(item);

                    return (
                        <div key={item.name} className={classNames(styles.item, isActive ? styles.item_active : '')} onClick={() => item.onClick(item)}>
                            {item.displayName}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Navigation;

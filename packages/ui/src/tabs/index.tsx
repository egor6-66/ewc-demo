import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Tabs = (props: PropsWithChildren<IProps>) => {
    const { id, tabs, children, classes } = props;

    return (
        <div className={classNames(styles.wrapper, classes?.wrapper)}>
            <div className={classNames(styles.tabs, classes?.tabs)}>
                {tabs.map((tab) => (
                    <div key={tab.name} className={classNames(styles.tab, classes?.tab)} onClick={() => tab.onClick(tab)}>
                        {tab.displayName}
                        {tab?.checkActive(tab) && <motion.div className={styles.line} layoutId={id} />}
                    </div>
                ))}
            </div>
            <div className={classNames(styles.children, classes.children)}>{children}</div>
        </div>
    );
};

export default Tabs;

import React, { PropsWithChildren, useEffect } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import AnimatePresence from '../animatePresence';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Tabs = (props: PropsWithChildren<IProps>) => {
    const { id, tabs, children, childAnimationKey, classes } = props;
    console.log('render');

    return (
        <div className={classNames(styles.wrapper, classes?.wrapper)}>
            <div className={classNames(styles.tabs, classes?.tabs)}>
                {tabs.map((tab) => {
                    const isActive = tab?.checkActive(tab);

                    return (
                        <div key={tab.name} className={classNames(styles.tab, classes?.tab)} onClick={() => tab.onClick(tab)}>
                            {tab.displayName}
                            {/*{isActive && <motion.div className={styles.line} layoutId={id} />}*/}
                        </div>
                    );
                })}
            </div>
            <AnimatePresence animationKey={childAnimationKey} visible={true} className={classNames(styles.children, classes.children)}>
                {children}
            </AnimatePresence>
        </div>
    );
};

export default Tabs;

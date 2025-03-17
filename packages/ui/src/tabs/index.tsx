import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import AnimatePresence from '../animatePresence';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Tabs = (props: PropsWithChildren<IProps>) => {
    const { tabs, children, childAnimationKey, classes } = props;

    return (
        <div className={classNames(styles.wrapper, classes?.wrapper)}>
            <div className={classNames(styles.tabs, classes?.tabs)}>
                {tabs.map((tab) => {
                    const isActive = tab?.checkActive(tab);

                    return (
                        <div
                            key={tab.name}
                            className={classNames(styles.tab, classes?.tab, isActive ? styles.tab_active : '')}
                            onClick={() => tab.onClick(tab)}
                        >
                            {tab.displayName}
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

import React, { PropsWithChildren, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStateCustom } from '@packages/hooks';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { IItem, IProps } from './interfaces';

import styles from './styles.module.scss';

const Navigation = (props: PropsWithChildren<IProps>) => {
    const { items = [], children, className } = props;
    const navigate = useNavigate();
    const location = useLocation();

    const lineData = useStateCustom({ positionX: 0, width: 0 });

    const handleClick = (item: IItem) => {
        navigate(item.name);
    };

    const refCallback = useCallback((node: HTMLDivElement | null) => {
        if (node) {
            lineData.set({ positionX: node.offsetLeft, width: node.offsetWidth });
        }
    }, []);

    return (
        <div className={classNames(styles.wrapper, className)}>
            <div className={styles.items}>
                {items.map((item) => {
                    const isActive = location.pathname.includes(item.name);

                    return (
                        <div
                            ref={isActive ? refCallback : null}
                            key={item.name}
                            className={classNames(styles.item, isActive ? styles.item_active : '')}
                            onClick={() => handleClick(item)}
                        >
                            {item.displayName}
                        </div>
                    );
                })}
                {lineData.value.width && <motion.div animate={{ width: lineData.value.width, left: lineData.value.positionX }} className={styles.line} />}
            </div>
            {children}
        </div>
    );
};

export default Navigation;

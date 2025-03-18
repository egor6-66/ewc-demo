import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import AnimatePresence from '../animatePresence';
import Icons from '../icons';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Dropdown = (props: IProps) => {
    const { visible = false, items } = props;
    const [openDropdown, setOpenDropdown] = useState(visible);

    useEffect(() => {
        setOpenDropdown(visible);
    }, [visible]);

    return (
        <div className={styles.wrapper}>
            <motion.div animate={{ rotate: openDropdown ? 90 : 0 }} className={styles.trigger} onClick={() => setOpenDropdown((prev) => !prev)}>
                <Icons icon={openDropdown ? 'close' : 'arrow'} />
            </motion.div>
            <div className={styles.dropdownContainer}>
                <AnimatePresence visible={openDropdown} className={styles.dropdown}>
                    {items.map((item) => (
                        <div className={styles.item} key={item.name}>
                            {item.displayName}
                        </div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Dropdown;

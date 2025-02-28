import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface IProps extends PropsWithChildren {
    animationKey?: string;
    className: string;
}

const Wrapper = (props: IProps) => {
    const { children, animationKey, className } = props;

    const animation = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <motion.div className={className} key={animationKey} {...animation} transition={{ duration: 0.25 }}>
            {children}
        </motion.div>
    );
};

export default Wrapper;

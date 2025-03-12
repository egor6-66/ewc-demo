import React, { PropsWithChildren } from 'react';
import * as FM from 'framer-motion';

import animations from './animations';
import { IProps } from './interfaces';

const AnimatePresence = (props: PropsWithChildren<IProps>) => {
    const { children, visible, animationKey, className, presence, motion, animationVariant = 'fadeInFadeOut' } = props;
    const { mode = 'wait', initial = false, ...morePresence } = presence || {};

    return (
        <FM.AnimatePresence {...morePresence} initial={initial} mode={mode}>
            {visible && (
                <FM.motion.div key={animationKey} transition={{ duration: 0.25 }} {...animations[animationVariant]} {...motion} className={className}>
                    {children}
                </FM.motion.div>
            )}
        </FM.AnimatePresence>
    );
};

export default AnimatePresence;

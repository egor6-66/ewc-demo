import React from 'react';

import { IProps } from './interfaces';

const Icons = (props: IProps) => {
    const { icon } = props;

    switch (icon) {
        case 'arrow':
            return (
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.80474 0.86195C8.06509 1.1223 8.06509 1.54441 7.80474 1.80476L4.4714 5.13809C4.34638 5.26312 4.17681 5.33335 4 5.33335C3.82319 5.33335 3.65362 5.26312 3.52859 5.13809L0.195261 1.80476C-0.0650883 1.54441 -0.0650883 1.1223 0.195261 0.861949C0.455611 0.6016 0.877721 0.6016 1.13807 0.861949L4 3.72388L6.86193 0.86195C7.12228 0.6016 7.54439 0.6016 7.80474 0.86195Z"
                        fill="var(--text-primary)"
                    />
                </svg>
            );

        case 'close':
            return (
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.76569 0.234315C8.0781 0.546734 8.0781 1.05327 7.76569 1.36569L1.36569 7.76569C1.05327 8.0781 0.546734 8.0781 0.234315 7.76569C-0.0781049 7.45327 -0.0781049 6.94673 0.234315 6.63432L6.63432 0.234315C6.94673 -0.0781049 7.45327 -0.0781049 7.76569 0.234315Z"
                        fill="var(--text-primary)"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.234315 0.234315C0.546734 -0.0781049 1.05327 -0.0781049 1.36569 0.234315L7.76569 6.63432C8.0781 6.94673 8.0781 7.45327 7.76569 7.76569C7.45327 8.0781 6.94673 8.0781 6.63432 7.76569L0.234315 1.36569C-0.0781049 1.05327 -0.0781049 0.546734 0.234315 0.234315Z"
                        fill="var(--text-primary)"
                    />
                </svg>
            );

        default:
            return null;
    }
};

export default Icons;

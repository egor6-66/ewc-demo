import React from 'react';

import { Wrapper } from '../../shared/ui';
import AuthByPass from '../../widgets/auth/by-pass';

import styles from './styles.module.scss';

const AuthPage = () => {
    return (
        <Wrapper animationKey={'authPage'} className={styles.wrapper}>
            <AuthByPass />
        </Wrapper>
    );
};

export default AuthPage;

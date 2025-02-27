import { useLogin } from '@/features/auth';

import styles from './styles.module.scss';

const AuthByPass = () => {
    const { login } = useLogin();

    return (
        <div className={styles.wrapper}>
            <div onClick={login}>LOGIN</div>
        </div>
    );
};

export default AuthByPass;

import React, { useEffect, useState } from 'react';

import { useLogout } from '@/features/auth';

import styles from './styles.module.scss';
const bc = new BroadcastChannel('map_channel');

const Header = () => {
    const [event, setEvent] = useState('');
    const { logout } = useLogout();

    const sendReq = () => {
        bc.postMessage('This is a test message.');
    };

    useEffect(() => {
        if (event) {
            console.log('qwdawd');
            setTimeout(() => {
                setEvent('');
            }, 1000);
        }

        console.log(event);
    }, [event]);

    useEffect(() => {
        bc.onmessage = (e) => {
            setEvent(`Новое событие от модуля ${e.origin}: ${JSON.stringify(e.data, null, 2)}`);
        };

        return () => {
            bc.close();
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            <div>
                <button onClick={sendReq}>send</button>
            </div>
            <div>{event}</div>
            <div>
                <button onClick={logout}>logout</button>
            </div>
        </div>
    );
};

export default Header;

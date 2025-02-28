import React, { useEffect, useRef, useState } from 'react';

import { useLogout } from '@/features/auth';

import styles from './styles.module.scss';

const Header = () => {
    const bc = useRef(new BroadcastChannel('main_channel'));

    const [event, setEvent] = useState('');
    const { logout } = useLogout();

    const sendReq = (recipient: 'MAP' | 'CARD') => {
        bc.current.postMessage(JSON.stringify({ event: 'HELLO', sender: 'HOST', recipient, data: 'EEEEE' }));
    };

    useEffect(() => {
        if (event) {
            setTimeout(() => {
                setEvent('');
            }, 1000);
        }
    }, [event]);

    useEffect(() => {
        bc.current.onmessage = (e) => {
            const parse = JSON.parse(e.data);

            if (parse.recipient === 'HOST') {
                setEvent(`Новое событие от модуля ${parse.sender}: ${JSON.stringify(parse.data, null, 2)}`);
            }
        };

        return () => {
            bc.current.close();
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttons}>
                <button onClick={() => sendReq('MAP')}>sendToMap</button>
                <button onClick={() => sendReq('CARD')}>sendToCard</button>
            </div>
            <div className={styles.events}>{event}</div>
            <div>
                <button onClick={logout}>logout</button>
            </div>
        </div>
    );
};

export default Header;

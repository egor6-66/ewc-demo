import React, { useEffect, useRef, useState } from 'react';

import packageJson from '../../package.json';

import styles from './styles.module.scss';

const App = () => {
    const bc = useRef(new BroadcastChannel('main_channel'));

    const [event, setEvent] = useState('');

    const sendReq = () => {
        bc.current.postMessage(JSON.stringify({ event: 'HELLO', sender: 'MAP', recipient: 'HOST', data: 'EEEEE' }));
    };

    useEffect(() => {
        bc.current.onmessage = (e) => {
            const parse = JSON.parse(e.data);

            if (parse.recipient === 'MAP') {
                setEvent(`Новое событие ${parse.event} от модуля ${parse.sender}: ${JSON.stringify(parse.data, null, 2)}`);
            }
        };

        return () => {
            bc.current.close();
        };
    }, []);

    useEffect(() => {
        if (event) {
            setTimeout(() => {
                setEvent('');
            }, 1000);
        }
    }, [event]);

    const openNewWindow = () => {
        const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000`;
        window.open(`http://localhost/map`, '', params);
    };

    return (
        <div className={styles.wrapper}>
            <button onClick={openNewWindow}>Open new window</button>
            <div>{`MODULE NAME: ${packageJson.name}`}</div>
            <div> {`VERSION: ${packageJson.version}`}</div>
            <button onClick={sendReq}>sendToHost</button>
            <div>{event}</div>
        </div>
    );
};

export default App;

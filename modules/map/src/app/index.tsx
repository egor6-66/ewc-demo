import React, { useEffect, useState } from 'react';
const bc = new BroadcastChannel('map_channel');
import packageJson from '../../package.json';

import styles from './styles.module.scss';

const App = () => {
    const [event, setEvent] = useState('');

    useEffect(() => {
        bc.onmessage = (e) => {
            setEvent(`Новое событие от модуля ${e.origin}: ${JSON.stringify(e.data, null, 2)}`);
        };

        return () => {
            bc.close();
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

        window.open('http://localhost/map', '', params);
    };

    return (
        <div className={styles.wrapper}>
            <button onClick={openNewWindow}>Open new window</button>
            <div>MODULE: MAP</div>
            <div> {`VERSION: ${packageJson.version}`}</div>
            <div>{event}</div>
        </div>
    );
};

export default App;

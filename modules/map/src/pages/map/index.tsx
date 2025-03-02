import React from 'react';
import { useRPC } from '@packages/hooks';

import { Wrapper } from '../../shared/ui';

import styles from './styles.module.scss';

const MapPage = () => {
    const isStandAlone = window.location.pathname.split('/')[1] === 'map';
    const rpc = useRPC({ currentModule: 'MAP' });
    console.log(window.location.pathname.split('/')[1]);

    const toggle = () => {
        rpc.send('toggleView', { standAlone: !isStandAlone }, ['HOST']);

        if (isStandAlone) {
            window.close();
        } else {
            // const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000`;
            // window.open(`http://localhost/map`, '', params);
        }
    };

    return (
        <Wrapper animationKey={'authPage'} className={styles.wrapper}>
            <button onClick={toggle}>{isStandAlone ? 'go to host' : 'go to standalone'}</button>
            map
        </Wrapper>
    );
};

export default MapPage;

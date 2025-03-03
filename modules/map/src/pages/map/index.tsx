import React from 'react';
import { useModule } from '@packages/hooks';
import { Modules } from '@packages/types';

import { Wrapper } from '../../shared/ui';

import styles from './styles.module.scss';

const MapPage = () => {
    const module = useModule();

    const toggle = () => {
        module.send(Modules.HOST, 'test', { eee: 1 }, (data) => {
            console.log(data);
        });

        // rpc.send(Modules.HOST, 'toggleStandalone', { standalone: !isStandalone }, (data) => {
        //     console.log(data);
        // });

        // if (isStandalone) {
        //     window.close();
        // } else {
        //     const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=600,left=0,top=0`;
        //     window.open(`http://localhost/map`, '', params);
        // }
    };

    return (
        <Wrapper animationKey={'authPage'} className={styles.wrapper}>
            <button onClick={toggle}>{'go to standalone'}</button>
            map
        </Wrapper>
    );
};

export default MapPage;

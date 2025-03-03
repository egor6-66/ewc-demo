import React, { useEffect } from 'react';
import { useModule } from '@packages/hooks';
import { Modules } from '@packages/types';

import { Wrapper } from '../../shared/ui';

import styles from './styles.module.scss';

const CardPage = () => {
    const module = useModule(Modules.CARD);

    const handleToggleStandalone = (value: boolean) => {
        module.send({
            target: 'HOST',
            eventName: 'toggleStandalone',
            data: { standalone: value },
        });
    };

    const toggle = () => {
        const isStandalone = module.checkStandalone();
        handleToggleStandalone(!isStandalone);

        if (isStandalone) {
            window.close();
        } else {
            const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=600,left=0,top=0`;
            setTimeout(() => {
                window.open(`http://localhost/card`, '', params);
            }, 250);
        }
    };

    useEffect(() => {
        window.onunload = () => {
            handleToggleStandalone(false);
        };
    }, []);

    return (
        <Wrapper animationKey={'authPage'} className={styles.wrapper}>
            <button onClick={toggle}>{'go to standalone'}</button>
            CardPage
        </Wrapper>
    );
};

export default CardPage;

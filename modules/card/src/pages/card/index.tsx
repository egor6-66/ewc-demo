import React, { useEffect } from 'react';
import { useModule } from '@packages/hooks';
import { Modules } from '@packages/types';
import * as process from 'node:process';

import packageJson from '../../../package.json';
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
        isStandalone ? module.windowEvents.close() : module.windowEvents.openNewWindow({ moduleUrl: 'http://localhost/card', delay: 250 });
    };

    useEffect(() => {
        window.onunload = () => {
            handleToggleStandalone(false);
        };
    }, []);

    return (
        <Wrapper animationKey={'authPage'} className={styles.wrapper}>
            <button onClick={toggle}>{module.checkStandalone() ? 'go to host' : 'go to standalone'}</button>
            <div>{`MODULE NAME: ${packageJson.name}`}</div>
            <div>{`MODULE VERSION: ${packageJson.version}`}</div>
        </Wrapper>
    );
};

export default CardPage;

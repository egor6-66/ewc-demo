import React from 'react';

import packageJson from '../../../package.json';

import styles from './styles.module.scss';

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div>{`MODULE NAME: ${packageJson.name}`}</div>
            <div>{`VERSION: ${packageJson.version}`}</div>
        </div>
    );
};

export default Footer;

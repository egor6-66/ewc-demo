import React, { useState } from 'react';
import { Dropdown, Icons, IDropdown } from '@packages/ui';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const AppState = (props: IProps) => {
    const { operatorName } = props;

    const dropdownItems: IDropdown.Items = [
        {
            name: 'themes',
            displayName: 'Тема',
            onClick: () => console.log('wad'),
        },
        {
            name: 'wadawd',
            displayName: 'Версии модулей',
            onClick: () => console.log('wad'),
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.operatorName}>{operatorName}</div>

            <div className={styles.dropdown}>
                <Dropdown items={dropdownItems} />
            </div>
        </div>
    );
};

export default AppState;

import React, { useState } from 'react';
import { Dropdown, Icons, IDropdown } from '@packages/ui';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const AppState = (props: IProps) => {
    const { operatorName } = props;

    const [openDropdown, setOpenDropdown] = useState(false);

    const dropdownItems: IDropdown.Items = [
        {
            name: 'themes',
            displayName: 'Тема',
            onClick: () => console.log('wad'),
        },
        {
            name: 'wadawd',
            displayName: 'Тема',
            onClick: () => console.log('wad'),
        },
        {
            name: 'wadawd',
            displayName: 'Тема',
            onClick: () => console.log('wad'),
        },
        {
            name: 'wdawdwa',
            displayName: 'Тема',
            onClick: () => console.log('wad'),
        },
    ];

    return (
        <div className={styles.wrapper} onClick={() => setOpenDropdown(!openDropdown)}>
            <div className={styles.operatorName}>{operatorName}</div>

            <div className={styles.dropdown}>
                <Dropdown visible={openDropdown} items={dropdownItems} />
            </div>
        </div>
    );
};

export default AppState;

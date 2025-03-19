import React from 'react';
import { useAccount, useThemes } from '@packages/hooks';
import { Dropdown, IDropdown } from '@packages/ui';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const AppState = (props: IProps) => {
    const { operatorName } = props;

    const { value, toggleBlackAndWhite } = useThemes();
    const { login } = useAccount();

    const dropdownItems: IDropdown.Items = [
        {
            name: 'themes_change',
            displayName: `Изменить тему: ${value}`,
            onClick: toggleBlackAndWhite,
        },
        {
            name: 'login',
            displayName: 'Выйти из аккаунта',
            onClick: login,
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

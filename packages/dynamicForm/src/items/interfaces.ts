import { CSSProperties } from 'react';
import { Control } from 'react-hook-form';

export enum Types {
    CHECKBOX = 'CHECKBOX',
    INPUT = 'INPUT',
    BUTTON = 'BUTTON',
    GROUP = 'GROUP',
}

export interface IProps {
    items: any;
    isFirstLvl?: boolean;
    control: Control;
    compact?: boolean;
    style?: CSSProperties;
    version?: any;
}

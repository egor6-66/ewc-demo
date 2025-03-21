import { CSSProperties } from 'react';
import { Control } from 'react-hook-form';

export interface IProps {
    item: any;
    control: Control;
    isFirstLvl?: boolean;
    grid: CSSProperties;
    itemIndex: number;
    version: any;
}

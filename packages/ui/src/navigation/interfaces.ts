import { ReactNode } from 'react';

export interface IItem {
    name: string;
    displayName: ReactNode;
}

export interface IProps {
    items: Items;
    className: string;
}

export type Items = Array<IItem>;

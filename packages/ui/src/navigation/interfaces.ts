import { ReactNode } from 'react';

export interface IItem {
    name: string;
    displayName: ReactNode;
}

export interface IProps {
    id: string;
    items: Items;
}

export type Items = Array<IItem>;

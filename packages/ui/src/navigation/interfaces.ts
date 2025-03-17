import { ReactNode } from 'react';

type TabWithOutCallback = Omit<IItem, 'onClick'>;

export interface IItem {
    name: string;
    displayName: ReactNode;
    checkActive: (tab: TabWithOutCallback) => boolean;
    onClick: (tab: TabWithOutCallback) => void;
}

export interface IProps {
    id: string;
    items: Items;
}

export type Items = Array<IItem>;

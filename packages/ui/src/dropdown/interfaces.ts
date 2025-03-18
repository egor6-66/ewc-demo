export interface IItem {
    name: string;
    displayName: string;
    onClick: (item: Omit<IItem, 'onClick'>) => void;
}

export interface IProps {
    visible?: boolean;
    items: Items;
}

export type Items = Array<IItem>;

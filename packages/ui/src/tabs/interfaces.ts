import { ReactNode } from 'react';

type TabWithOutCallback = Omit<ITab, 'onClick'>;

export interface ITab {
    name: string;
    displayName: ReactNode;
    checkActive: (tab: TabWithOutCallback) => boolean;
    onClick: (tab: TabWithOutCallback) => void;
}

export interface IProps {
    id?: string;
    tabs: Tabs;
    childAnimationKey?: string;
    classes?: {
        wrapper?: string;
        tabs?: string;
        tab?: string;
        children?: string;
    };
}

export type Tabs = Array<ITab>;

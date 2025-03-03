type Event = (data: any, from: string) => any;

export interface IStore {
    broadcasts: Record<string, BroadcastChannel>;
    module: string;
}

export interface IProps {
    currentModule: string;
    disabled?: boolean;
    events?: Record<string, Event>;
}

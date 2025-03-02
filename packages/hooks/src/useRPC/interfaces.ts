export interface IStore {
    broadcasts: Record<string, BroadcastChannel>;
}

interface IEvent {
    event: (data: object, from: string) => void;
}

export interface IProps {
    currentModule: string;
    disabled?: boolean;
    events?: Record<string, IEvent>;
}

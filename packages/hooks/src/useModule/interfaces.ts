export interface IStore {
    broadcasts: Record<string, BroadcastChannel>;
}

export interface IProps {
    events?: Record<string, (data: any, from: string) => any>;
}

export interface ISendProps<M> {
    target: M;
    eventName: string;
    data?: any;
    waitingTimer?: number;
}

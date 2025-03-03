type Event = (data: any, from: string) => any;

export interface IOptions {
    disabled?: boolean;
    events?: Record<string, Event>;
}

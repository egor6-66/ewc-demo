export enum Types {
    CHECKBOX = 'CHECKBOX',
    INPUT = 'INPUT',
    BUTTON = 'BUTTON',
    GROUP = 'GROUP',
}

export interface IAction {
    fields: Array<string>;
    callback: string;
}

export interface IField {
    type: Types;
    name: string;
    displayName: string;
    value: string;
    placeholder: string;
    options: any;
    disabled: string;
    actions: IActions;
}

export interface IData {
    version: string;
    description: string;
    fields: Fields;
}
export type IActions = Array<IAction>;
export type Fields = Array<IField>;

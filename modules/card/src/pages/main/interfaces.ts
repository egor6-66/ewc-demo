export interface IState {
    disabled: boolean;
}

export enum Types {
    checkbox = 'checkbox',
    input = 'input',
}

export interface IAcceptableValues {
    value: string;
    displayValue: string;
}

export interface IField {
    id: string;
    name: string;
    displayName: string;
    type: Types;
    value: string;
    placeholder: string;
    acceptableValues: Array<IAcceptableValues>;
    state?: IState;
    callback?: () => void;
}

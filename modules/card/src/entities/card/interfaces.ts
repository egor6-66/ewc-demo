export enum Types {
    CHECKBOX = 'CHECKBOX',
    INPUT = 'INPUT',
    BUTTON = 'BUTTON',
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
    disabled: string;
    actions?: any;
}

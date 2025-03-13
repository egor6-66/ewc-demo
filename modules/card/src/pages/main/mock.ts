import { IField, Types } from './interfaces';

const fields: Array<IField> = [
    {
        id: '1',
        name: 'street',
        displayName: 'улица',
        type: Types.input,
        value: '',
        placeholder: 'введите улицу',
        acceptableValues: [
            { value: 'street1', displayValue: 'лица1' },
            { value: 'street2', displayValue: 'лица2' },
            { value: 'street3', displayValue: 'лица3' },
        ],
        state: {
            disabled: false,
        },
    },
    {
        id: '2',
        name: 'street_checkbox',
        displayName: 'разблокировать улицу',
        type: Types.checkbox,
        value: '',
        placeholder: '',
        acceptableValues: [],
    },
];

export default fields;

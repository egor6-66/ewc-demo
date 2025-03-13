import React, { ReactNode, useEffect } from 'react';

import { IState, Types } from './interfaces';
import fields from './mock';

import styles from './styles.module.scss';

const MainPage = () => {
    const form: any = {
        checkboxValue: null,
        inputValue: null,
    };

    const elements = (state: IState) => ({
        [Types.input]: (
            <input
                value={form.inputValue}
                onChange={(val) => {
                    form.inputValue = val.currentTarget.value;
                }}
                {...state}
            />
        ),
        [Types.checkbox]: (
            <input
                type="checkbox"
                onClick={() => {
                    form.checkboxValue = !form.checkboxValue;
                    console.log(form);
                }}
                value={form.checkboxValue}
                {...state}
            />
        ),
    });

    console.log(form);

    return (
        <div className={styles.wrapper}>
            {fields.map((field) => (
                <div key={field.name}>{elements(field.state)[field.type]}</div>
            ))}
        </div>
    );
};

export default MainPage;

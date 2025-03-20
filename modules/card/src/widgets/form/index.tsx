import React from 'react';
import { DynamicForm } from '@packages/dynamic-form';

import { useGetCardConfig } from '@/features';

import { IProps } from './interfaces';

import styles from './styles.module.scss';

const Form = (props: IProps) => {
    const { id } = props;

    const { data: cardConfig, refetch } = useGetCardConfig(id);

    return (
        <div className={styles.wrapper}>
            <DynamicForm config={cardConfig} />
        </div>
    );
};

export default Form;

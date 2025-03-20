import React from 'react';
import { useRouting } from '@packages/hooks';

import { Form } from '@/widgets';

import styles from './styles.module.scss';

const CardPage = () => {
    const { getParams } = useRouting();
    const params = getParams();

    return (
        <div className={styles.wrapper}>
            <Form id={params.cardId} />
        </div>
    );
};

export default CardPage;

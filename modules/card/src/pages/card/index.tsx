import React from 'react';
import { useParams } from 'react-router-dom';

import { Form } from '@/widgets';

import styles from './styles.module.scss';

const CardPage = () => {
    const params = useParams();

    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <Form id={params.cardId} />
            </div>
        </div>
    );
};

export default CardPage;

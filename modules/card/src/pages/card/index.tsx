import React from 'react';
import { useParams } from 'react-router-dom';

import { Form } from '@/widgets';

import styles from './styles.module.scss';

const CardPage = () => {
    const params = useParams();

    return (
        <div className={styles.wrapper}>
            <Form id={params.cardId} />
        </div>
    );
};

export default CardPage;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useModule, useStateCustom } from '@packages/hooks';

import { ICard } from '@/entities';
import { useGetCardConfig } from '@/features';

import styles from './styles.module.scss';

const CardPage = () => {
    const params = useParams();

    const { data: cardConfig } = useGetCardConfig(params.cardType);

    const state = useStateCustom<Array<ICard.IField>>(cardConfig?.fields);

    return (
        <div className={styles.wrapper}>
            {state?.value &&
                Object.entries(state.value)?.map(([key, field]) => {
                    console.log(field.type);

                    switch (field.type) {
                        case ICard.Types.INPUT:
                            return <input />;

                        case ICard.Types.CHECKBOX:
                            return <input type={'checkbox'} />;
                    }
                })}
        </div>
    );
};

export default CardPage;

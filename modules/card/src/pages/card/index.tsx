import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useStateCustom } from '@packages/hooks';
import { Button, Checkbox, Input } from '@packages/ui';

import { ICard } from '@/entities';
import { useGetCardConfig } from '@/features';

import styles from './styles.module.scss';

type Fields = Record<string, ICard.IField>;

function parseValue(value: string) {
    if (value?.includes('link$')) {
        // const ev = eval(value.split('$')[1]);

        return value.split('$')[1];
        // if (typeof ev === 'function') {
        //     return ev();
        // }
    }

    if (value === 'true' || value === 'false') {
        return value === 'true';
    }

    return value;
}

const CardPage = () => {
    const params = useParams();
    const ref = useRef<HTMLInputElement>(null);
    const { data: cardConfig } = useGetCardConfig(params.cardType);

    const state = useStateCustom<Fields>(cardConfig?.fields as Fields);

    const changeInput = () => {};

    const mapper = (elementKey: string, field: ICard.IField) => {
        const disabled: any = parseValue(field.disabled);

        if (disabled) {
            const propByPath = (object: any, path: any) => path.split('.').reduce((acc: any, cur: any) => acc?.[cur], object);
            console.log(propByPath(state.value, disabled));
        }

        switch (field.type) {
            case ICard.Types.INPUT:
                return <Input placeholder={field.placeholder} displayName={field.displayName} disabled={!!field.disabled} />;

            case ICard.Types.CHECKBOX:
                return (
                    <Checkbox
                        displayName={field.displayName}
                        value={field.value}
                        onClick={() => state.set((prev) => ({ ...prev, [elementKey]: { ...field, value: field.value === 'true' ? 'false' : 'true' } }))}
                    />
                );

            case ICard.Types.BUTTON:
                return <Button />;
        }
    };

    return (
        <div ref={ref} className={styles.wrapper}>
            {cardConfig?.fields && Object.entries(cardConfig.fields)?.map(([key, field]) => <div key={key}>{mapper(key, field as any)}</div>)}
        </div>
    );
};

export default CardPage;

import React, { useEffect, useRef } from 'react';
import { Control, Controller, FieldValue, SubmitHandler, useForm, useFormContext, UseFormSetValue, UseFormWatch, useWatch } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useStateCustom } from '@packages/hooks';
import { Button, Checkbox, Input } from '@packages/ui';
import classNames from 'classnames';

import { ICard } from '@/entities';
import { useGetCardConfig } from '@/features';

import styles from './styles.module.scss';

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

const initWatcher = (fields: ICard.Fields, watch: UseFormWatch<any>, setValue: UseFormSetValue<any>) => {
    const withActions: Record<string, ICard.IActions> = {};

    for (const field of fields) {
        if (field?.actions) {
            withActions[field.name] = field.actions;
        }
    }

    return watch((state) => {
        for (const [key, actions] of Object.entries(withActions)) {
            for (const [action, data] of Object.entries(actions)) {
                const callback = eval(data.callback);

                if (typeof callback === 'function') {
                    let el = document.getElementById(key);

                    if (action === 'setDisabled') {
                        el.dataset.disabled = callback(state);
                    }

                    el = null;
                }
            }
        }

        return { ...state, checkbox2: true };
    });
};

const CardPage = () => {
    const params = useParams();
    const { data: cardConfig, refetch } = useGetCardConfig(params.cardId);
    const { handleSubmit, control, watch, getValues, setValue } = useForm();

    useEffect(() => {
        if (cardConfig?.fields) {
            const watcher = initWatcher(cardConfig.fields, watch, setValue);

            return () => watcher.unsubscribe();
        }
    }, [cardConfig]);

    const onSubmit = (data: any) => console.log(data);

    const fieldsMapper = (group: any) => {
        return group?.fields?.map((field: any) => {
            const grid = {
                gridColumnStart: field.grid?.column,
                gridRowStart: field.grid?.row,
            };

            switch (field.type) {
                case ICard.Types.INPUT:
                    return (
                        <Controller
                            key={field.name}
                            name={field.name}
                            control={control}
                            defaultValue={field.value}
                            render={(data) => {
                                return (
                                    <Input
                                        wrapperStyles={grid}
                                        nameStyles={{ textAlign: group.grid?.column === 1 ? 'left' : 'right' }}
                                        id={field.name}
                                        disabled={field.disabled === 'true'}
                                        {...field}
                                        {...data.field}
                                    />
                                );
                            }}
                        />
                    );

                case ICard.Types.CHECKBOX:
                    return (
                        <Controller
                            key={field.name}
                            name={field.name}
                            control={control}
                            defaultValue={field.value === 'true'}
                            render={(data) => (
                                <Checkbox
                                    wrapperStyles={grid}
                                    checked={data.field.value}
                                    onChange={(e) => setValue(field.name, e.currentTarget.checked)}
                                    displayName={field.displayName}
                                    {...data.field}
                                />
                            )}
                        />
                    );

                case ICard.Types.BUTTON:
                    return <Button key={field.name} />;

                case ICard.Types.GROUP:
                    return (
                        <div className={styles.groups} style={grid}>
                            {GroupsMapper(field.groups)}
                        </div>
                    );
            }
        });
    };

    function GroupsMapper(groups: any, isFirstLvl?: boolean) {
        return groups?.map((group: any) => {
            const groupClasses = classNames({
                [styles.group]: true,
                [styles.group_firstLevel]: isFirstLvl,
            });

            const grid = {
                gridColumnStart: group.grid?.column,
                gridRowStart: group.grid?.row,
            };

            return (
                <div key={group.name} className={groupClasses} style={{ ...grid }}>
                    <div className={styles.name}>{group.displayName}</div>
                    <div className={styles.fields}>{fieldsMapper(group)}</div>
                </div>
            );
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
            <Button onClick={() => refetch()}>refetch</Button>
            <div className={styles.groups} style={{ gap: 2 }}>
                {GroupsMapper(cardConfig?.groups, true)}
            </div>
        </form>
    );
};

export default CardPage;

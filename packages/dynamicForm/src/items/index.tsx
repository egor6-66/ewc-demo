import React from 'react';
import { Controller } from 'react-hook-form';
import { Button, Checkbox, Input } from '@packages/ui';
import classNames from 'classnames';

import Group from './group';
import { IProps, Types } from './interfaces';

import styles from './styles.module.scss';

const Items = (props: IProps) => {
    const { items, control, isFirstLvl } = props;

    const classes = classNames({
        [styles.wrapper]: true,
        [styles.wrapper_firstLvl]: isFirstLvl,
    });

    return (
        <div className={classes}>
            {items?.map((item: any) => {
                const grid = {
                    gridColumnStart: item.grid?.column,
                    gridRowStart: item.grid?.row,
                    gridColumnEnd: item.grid?.columnEnd,
                    gridRowEnd: item.grid?.rowEnd,
                };

                switch (item.type) {
                    case Types.INPUT:
                        return (
                            <Controller
                                key={item.name}
                                name={item.name}
                                control={control}
                                defaultValue={item.value}
                                render={(data) => {
                                    return (
                                        <Input
                                            wrapperStyles={grid}
                                            nameStyles={{ textAlign: item.grid?.column === 1 ? 'left' : 'right' }}
                                            id={item.name}
                                            disabled={item.disabled === 'true'}
                                            {...item}
                                            {...data.field}
                                        />
                                    );
                                }}
                            />
                        );

                    case Types.CHECKBOX:
                        return (
                            <Controller
                                key={item.name}
                                name={item.name}
                                control={control}
                                defaultValue={item.value === 'true'}
                                render={(data) => (
                                    <Checkbox
                                        wrapperStyles={grid}
                                        // checked={data.field.value}
                                        // onChange={(e) => setValue(field.name, e.currentTarget.checked)}
                                        displayName={item.displayName}
                                        {...data.field}
                                    />
                                )}
                            />
                        );

                    case Types.BUTTON:
                        return <Button key={item.name} />;

                    case Types.GROUP:
                        return <Group key={item.name} item={item} control={control} grid={grid} isFirstLvl={isFirstLvl} />;
                }
            })}
        </div>
    );
};

export default Items;

import React from 'react';
import { Controller } from 'react-hook-form';
import { Button, Checkbox, Input } from '@packages/ui';
import classNames from 'classnames';

import Group from './group';
import { IProps, Types } from './interfaces';

import styles from './styles.module.scss';

const Items = (props: IProps) => {
    const { version, items, control, isFirstLvl, style } = props;

    const classes = classNames({
        [styles.wrapper]: true,
        [styles.wrapper_firstLvl]: isFirstLvl,
    });

    return (
        <div className={classes} style={style}>
            {items?.map((item: any, index: number) => {
                const grid = {
                    gridColumn: item.grid?.column,
                    gridRow: item.grid?.row,
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
                                    return <Input wrapperStyle={grid} id={item.name} {...item} {...data.field} />;
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
                                        wrapperStyle={grid}
                                        // checked={data.field.value}
                                        // onChange={(e) => setValue(field.name, e.currentTarget.checked)}
                                        displayName={item.displayName}
                                        {...data.field}
                                    />
                                )}
                            />
                        );

                    case Types.BUTTON:
                        return (
                            <Button style={{ ...grid, ...item?.style }} key={item.name} iconName={item?.icon}>
                                {item?.displayName}
                            </Button>
                        );

                    case Types.GROUP:
                        return <Group key={item.name} item={item} control={control} grid={grid} isFirstLvl={isFirstLvl} itemIndex={index} version={version} />;
                }
            })}
        </div>
    );
};

export default Items;

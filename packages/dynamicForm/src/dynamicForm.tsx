import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { IDynamicFormProps } from './interface';
import Items from './items';

const DynamicForm = (props: IDynamicFormProps) => {
    const { config } = props;
    const { handleSubmit, control, watch, getValues, setValue } = useForm();
    // useEffect(() => {
    //     if (cardConfig?.fields) {
    //         const watcher = initWatcher(cardConfig.fields, watch, setValue);
    //
    //         return () => watcher.unsubscribe();
    //     }
    // }, [cardConfig]);

    const onSubmit = async (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Items control={control} item={config} isFirstLvl />
        </form>
    );
};

export default DynamicForm;

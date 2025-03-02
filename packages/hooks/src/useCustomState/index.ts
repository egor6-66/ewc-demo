import { useEffect, useState } from 'react';

import { IOptions } from './interfaces';
import { LocalStorage } from './utils';

const moduleName = process.env.MODULE_NAME;

function useCustomState<T>(defaultValue: T, options?: IOptions<T>) {
    const getDefaultValue = () => {
        if (options?.lsKey) {
            const data = LocalStorage.get(moduleName);

            if (data) {
                return data[options.lsKey];
            }
        }

        return defaultValue;
    };

    const [state, setState] = useState(getDefaultValue);

    const set = (value: T | ((value: T) => T)) => {
        if (typeof value === 'function') {
            // @ts-ignore
            setState(value(state));
        } else {
            setState(value);
        }
    };

    useEffect(() => {
        if (options?.lsKey) {
            const data = LocalStorage.get(moduleName);

            if (!data) {
                LocalStorage.set(moduleName, { [options.lsKey]: state });
            } else {
                LocalStorage.set(moduleName, { ...data, [options.lsKey]: state });
            }
        }
    }, [state]);

    return { value: state, set };
}

export default useCustomState;

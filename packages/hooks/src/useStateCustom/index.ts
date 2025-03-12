import { useEffect, useState } from 'react';

import { LocalStorage } from '../_utils';

import { IOptions } from './interfaces';

function useStateCustom<T>(defaultValue: T, options?: IOptions) {
    const { lsKey } = options || {};

    const getDefaultValue = () => {
        return lsKey ? LocalStorage.get(lsKey) || defaultValue : defaultValue;
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

    const clear = () => {
        LocalStorage.remove(lsKey);
        setState(undefined);
    };

    useEffect(() => {
        if (lsKey) {
            LocalStorage.set(lsKey, state);
        }
    }, [state]);

    return { value: state, set, clear };
}

export default useStateCustom;

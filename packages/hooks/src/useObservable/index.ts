import { useState } from 'react';

import useIsomorphicLayoutEffect from '../useIsomorphicLayoutEffect';

export interface IObservable<T> {
    subscribe: (listener: (value: T) => void) => {
        unsubscribe: () => void;
    };
}

function useObservable<T>(observable$: IObservable<T>): T | undefined;
function useObservable<T>(observable$: IObservable<T>, initialValue: T): T;
function useObservable<T>(observable$: IObservable<T>, initialValue?: T): T | undefined {
    const [value, update] = useState<T | undefined>(initialValue);

    useIsomorphicLayoutEffect(() => {
        const s = observable$.subscribe(update);

        return () => s.unsubscribe();
    }, [observable$]);

    return value;
}

export default useObservable;

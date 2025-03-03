import { ReactNode } from 'react';

export type IStatus = 'loading' | 'success' | 'error';

export interface IMicroservice<T> {
    url: string;
    scope: string;
    module: string;
    moduleProps: T;
    errorComponent: ReactNode;
    loadingComponent: ReactNode;
    onError?: () => void;
}

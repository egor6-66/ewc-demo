import { InputHTMLAttributes } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    isLoading?: boolean;
    displayName: string;
}

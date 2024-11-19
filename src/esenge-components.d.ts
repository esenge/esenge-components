declare module 'esenge-component-library' {
    import { FC } from 'react';

    export interface ButtonProps {
        label: string;
        onClick: () => void;
    }

    export const Button: FC<ButtonProps>;
}

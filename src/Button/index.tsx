import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';
import { BUTTON_SIZE, BUTTON_TYPE } from './types';

export interface I_ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    size: BUTTON_SIZE,
    type: BUTTON_TYPE,
}

const Button: React.FC<I_ButtonProps> = ({
    label,
    onClick,
    disabled,
    size = BUTTON_SIZE.MEDIUM,
    type = BUTTON_TYPE.PRIMARY,
}) => {
    const buttonClass = cn(s.btn, s[size], s[type]);

    return (
        <button className={buttonClass} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;

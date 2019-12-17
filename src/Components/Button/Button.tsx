import React from 'react';
import cn from 'classnames';

interface ButtonProps {
    filled?: boolean;
    className?: string;
    text: string;
    outlined?: boolean;
    onClick?: () => void
}

export const Button = ({ onClick, filled = false, text, outlined = false, className }: ButtonProps) => (
    <div onClick={onClick} className={cn('button', filled ? 'filled' : 'normal', outlined ? 'outlined' : '', className)}>
        {text}
    </div>
)
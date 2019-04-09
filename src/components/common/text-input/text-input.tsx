import style from './text-input.module.sass';
import React from 'react';
import bem from 'bem-css-modules';

const b = bem(style);

export type ITextInputSize = 'small' | 'medium' | 'large';
export type ITextInputType = 'text' | 'password' | 'number' | 'tel' | 'email';

export interface ITextInputProps {
    invalid?: boolean;
    size: ITextInputSize;
    value: string;
    type?: ITextInputType;
    maxLength?: number;
    autoComplete?: string;
    min?: number;
    max?: number;
    step?: number;
    pattern?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    onDoubleClick?: React.MouseEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onFocusCapture?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onBlurCapture?: React.FocusEventHandler<HTMLInputElement>;
}

export default function TextInput(props: ITextInputProps): React.ReactElement {
    const {size, invalid, ...rest} = props;

    return (
        <div className={b()}>
            <input
                className={b('input', {size, invalid})}
                {...rest}
            />
        </div>
    );
}

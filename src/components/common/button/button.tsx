import style from './button.module.sass';
import React from 'react';
import bem from 'bem-css-modules';

const b = bem(style);

export type IButtonSize = 'small' | 'medium' | 'large';
export type IButtonType = 'button' | 'submit' | 'reset';
export type IButtonStyle = 'transparent' | 'color';

interface IButtonProps {
    size: IButtonSize;
    disabled?: boolean;
    type?: IButtonType;
    tabIndex?: number;
    ariaLabel?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default class Button extends React.PureComponent<IButtonProps> {
    render(): React.ReactNode {
        const {size, children, ...rest} = this.props;

        return (
            <button
                {...rest}
                className={b({size})}
            >
                {children}
            </button>
        );
    }
}

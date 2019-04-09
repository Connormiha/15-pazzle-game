import style from './button.module.sass';
import React from 'react';
import bem from 'bem-css-modules';

const b = bem(style);

export type IButtonSize = 'small' | 'medium' | 'large';
export type IButtonType = 'button' | 'submit' | 'reset';
export type IButtonStyle = 'transparent' | 'color';

interface IButtonProps {
    size: IButtonSize;
    style?: IButtonStyle;
    disabled?: boolean;
    type?: IButtonType;
    tabIndex?: number;
    ariaLabel?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default class Button extends React.PureComponent<IButtonProps> {
    static defaultProps = {
        style: 'transparent'
    };

    render(): React.ReactNode {
        const {size, children, style, ...rest} = this.props;

        return (
            <button
                {...rest}
                className={b({
                    size,
                    disabled: rest.disabled,
                    style
                })}
            >
                {children}
            </button>
        );
    }
}

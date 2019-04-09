import style from './field-item.module.sass';
import React from 'react';
import bem from 'bem-css-modules';

const b = bem(style);

interface IFieldItemProps {
    isDisabled: boolean;
    onClick: (id: number) => void;
    id: number;
}

export default class FieldItem extends React.PureComponent<IFieldItemProps> {
    private _handleClick = (): void => {
        this.props.onClick(this.props.id);
    }

    render(): React.ReactNode {
        return (
            <button
                className={b({empty: this.props.id === 0})}
                disabled={this.props.isDisabled}
                onClick={this._handleClick}
            >
                {this.props.id}
            </button>
        );
    }
}
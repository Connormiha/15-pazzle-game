import style from 'field-item.module.sass';
import React from 'react';
import FieldItem from 'components/field-item';
import bem from 'bem-css-modules';

const b = bem(style);

interface IFieldItemProps {
    field: number[];
}

export default class Field extends React.PureComponent<IFieldItemProps> {
    private _handleClick = (id: number): void => {
        console.log(id);
    }
    
    private _renderItems(): React.ReactNode {
        return this.props.field.map((id: number) =>
            (
                <FieldItem
                    id={id}
                    isDisabled={false}
                    onClick={this._handleClick}
                />
            )
        );
    }
    
    render(): React.ReactNode {
        return (
            <article
                className={b()}
            >
                {this._renderItems()}
            </article>
        );
    }
}

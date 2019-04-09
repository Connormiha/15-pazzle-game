import style from './field.module.sass';
import React from 'react';
import FieldItem from 'components/field-item';
import {isCanMove} from 'lib/utils';
import bem from 'bem-css-modules';

const b = bem(style);

interface IFieldItemProps {
    field: number[];
    onMove: (id: number) => void;
}

export default class Field extends React.PureComponent<IFieldItemProps> {
    private _renderItems(): React.ReactNode {
        const {field, onMove} = this.props;
        const size = Math.sqrt(field.length);

        return field.map((id: number, i: number) =>
            (
                <React.Fragment key={id}>
                    <FieldItem
                        id={id}
                        isDisabled={!isCanMove(field, i)}
                        onClick={onMove}
                    />
                    {((i + 1) % size === 0) && <div />}
                </React.Fragment>
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

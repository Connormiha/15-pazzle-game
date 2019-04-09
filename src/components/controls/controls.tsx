import style from './controls.module.sass';
import React from 'react';
import Button from 'components/common/button';
import TextInput from 'components/common/text-input';
import bem from 'bem-css-modules';

const b = bem(style);

interface IControlsProps {
    historyCount: number;
    fieldSize: number;
    onMoveBack(): void;
    onChangeSize(size: number): void;
}

interface IControlsState {
    fieldSizeValue: string;
}

export default class Controls extends React.PureComponent<IControlsProps, IControlsState> {
    constructor(props: IControlsProps) {
        super(props);

        this.state = {
            fieldSizeValue: String(props.fieldSize)
        };
    }

    private _handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            fieldSizeValue: e.target.value
        });
    }

    private _handleSubmitSize = (e: React.SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.props.onChangeSize(parseInt(this.state.fieldSizeValue, 10));
    }

    private _renderFieldSizeForm(): React.ReactNode {
        return (
            <form
                onSubmit={this._handleSubmitSize}
                className={b('form')}
            >
                <label className={b('label')}>
                    Размер поля
                    <TextInput
                        value={this.state.fieldSizeValue}
                        onChange={this._handleChangeSize}
                        type="number"
                        size="small"
                        min={2}
                        max={100}
                        step={1}
                    />
                </label>
                <Button
                    size="medium"
                >
                    Применить
                </Button>
            </form>
        );
    }

    private _renderHistoryCount(): React.ReactNode {
        return (
            <div className={b('count')}>
                {'Число ходов: '}
                <b>
                    {this.props.historyCount}
                </b>
            </div>
        );
    }

    render(): React.ReactNode {
        const {historyCount, onMoveBack} = this.props;

        return (
            <section
                className={b()}
            >
                <Button
                    disabled={historyCount === 0}
                    onClick={onMoveBack}
                    size="medium"
                >
                    Ход назад
                </Button>
                {this._renderFieldSizeForm()}
                {this._renderHistoryCount()}
            </section>
        );
    }
}

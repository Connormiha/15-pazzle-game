import style from './controls.module.sass';
import React from 'react';
import Button from 'components/common/button';
import TextInput from 'components/common/text-input';
import bem from 'bem-css-modules';

const b = bem(style);

interface IControlsProps {
    isAvailableHistory: boolean;
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
            <form onSubmit={this._handleSubmitSize}>
                <TextInput
                    value={this.state.fieldSizeValue}
                    onChange={this._handleChangeSize}
                    type="number"
                    size="medium"
                    min={2}
                    max={100}
                    step={1}
                />
                <Button
                    size="medium"
                >
                    Применить
                </Button>
            </form>
        );
    }

    render(): React.ReactNode {
        const {isAvailableHistory, onMoveBack} = this.props;

        return (
            <section
                className={b()}
            >
                <Button
                    disabled={!isAvailableHistory}
                    onClick={onMoveBack}
                    size="medium"
                >
                    Назад
                </Button>
                {this._renderFieldSizeForm()}
            </section>
        );
    }
}

import style from './app.module.sass';
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {ISchema} from 'reducers/schema';
import {IFieldStore, IGameStore} from 'flux/types';
import * as gameActions from 'flux/game';
import * as fieldActions from 'flux/field';
import Field from 'components/field';
import Controls from 'components/controls';
import {isWin} from 'lib/utils';
import {batchActions} from 'redux-batched-actions';
import bem from 'bem-css-modules';

const b = bem(style);

interface IAppProps {
    field: IFieldStore;
    game: IGameStore;
    onStartGame(size: number): void;
    onMove(id: number): void;
    onMoveBack(): void;
    onWin(): void;
}

class App extends React.Component<IAppProps> {
    componentDidMount(): void {
        this.props.onStartGame(4);
    }

    componentDidUpdate(prevProps: IAppProps): void {
        const {position} = this.props.field;

        if (position !== prevProps.field.position && isWin(position)) {
            this.props.onWin();
        }
    }

    private _renderControls(): React.ReactNode {
        const {onMoveBack, onStartGame, field} = this.props;

        if (!field.position.length) {
            return null;
        }

        return (
            <Controls
                onMoveBack={onMoveBack}
                onChangeSize={onStartGame}
                fieldSize={Math.sqrt(field.position.length)}
                historyCount={field.history.length}
            />
        );
    }

    render(): React.ReactNode {
        return (
            <div className={b()}>
                {this._renderControls()}
                <div className={b('field')}>
                    <Field
                        field={this.props.field.position}
                        onMove={this.props.onMove}
                    />
                </div>
            </div>
        );
    }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onStartGame(size: number): void {
            dispatch(
                batchActions([
                    gameActions.start(),
                    fieldActions.generate(size)
                ])
            );
        },

        onMove(id: number): void {
            dispatch(
                batchActions([
                    fieldActions.move(id)
                ])
            );
        },

        onMoveBack(): void {
            dispatch(
                batchActions([
                    fieldActions.moveBack()
                ])
            );
        },

        onWin(): void {
            dispatch(
                batchActions([
                    gameActions.win()
                ])
            );
        }
    };
};

export default connect(
    (state: ISchema) => state,
    mapDispatchToProps
)(App);

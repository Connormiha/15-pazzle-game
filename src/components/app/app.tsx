import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {ISchema} from 'reducers/schema';
import {IFieldStore, IGameStore} from 'flux/types';
import * as gameActions from 'flux/game';
import * as fieldActions from 'flux/field';
import Field from 'components/field';
import {isWin} from 'lib/utils';
import {batchActions} from 'redux-batched-actions';

interface IAppProps {
    field: IFieldStore;
    game: IGameStore;
    onStartGame(size: number): void;
    onMove(id: number): void;
    onMoveBack(id: number): void;
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

    render(): React.ReactNode {
        return (
            <Field
                field={this.props.field.position}
                onMove={this.props.onMove}
            />
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

        onMoveBack(id: number): void {
            dispatch(
                batchActions([
                    fieldActions.moveBack(id)
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

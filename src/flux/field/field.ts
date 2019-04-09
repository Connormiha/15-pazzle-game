import schema from 'reducers/schema';
import {IFieldStore} from 'flux/types';
import {FIELD_MOVE, FIELD_MOVE_BACK, FIELD_GENERATE} from 'flux/constants';
import {AnyAction} from 'redux';
import {moveFieldItem, generateField} from 'lib/utils';

export const generate = (size: number): AnyAction =>
    ({type: FIELD_GENERATE, size});

export const move = (target: number): AnyAction =>
    ({type: FIELD_MOVE, target});

export const moveBack = (): AnyAction =>
    ({type: FIELD_MOVE_BACK});

const getDefaultState = (): IFieldStore =>
    schema.field;

export default (state: IFieldStore = getDefaultState(), {type, target, size}: AnyAction): IFieldStore => {
    switch (type) {
        case FIELD_GENERATE:
            return {
                position: generateField(size),
                history: state.history
            };

        case FIELD_MOVE:
            return {
                position: moveFieldItem(state.position, target),
                history: state.history.concat(target)
            };

        case FIELD_MOVE_BACK:
            return {
                position: moveFieldItem(state.position, state.history[state.history.length - 1]),
                history: state.history.slice(0, -1)
            };
    }

    return state;
};

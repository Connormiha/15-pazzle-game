import schema from 'reducers/schema';
import {IGameStore} from 'flux/types';
import {GAME_WIN, GAME_FAIL, GAME_START} from 'flux/constants';
import {AnyAction} from 'redux';

export const start = (): AnyAction =>
    ({type: GAME_START});

export const fail = (): AnyAction =>
    ({type: GAME_FAIL});

export const win = (): AnyAction =>
    ({type: GAME_WIN});

const getDefaultState = (): IGameStore =>
    schema.game;

export default (state: IGameStore = getDefaultState(), {type}: AnyAction): IGameStore => {
    switch (type) {
        case GAME_START:
            return {
                state: 'in-progress'
            };

        case GAME_WIN:
            return {
                state: 'win'
            };

        case GAME_FAIL:
            return {
                state: 'fail'
            };
    }

    return state;
};

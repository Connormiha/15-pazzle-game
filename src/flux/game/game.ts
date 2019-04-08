import schema from 'reducers/schema';
import {IGameStore} from 'flux/types';
import {GAME_FINISH, GAME_START} from 'flux/constants';
import {AnyAction} from 'redux';

export const start = (): AnyAction =>
    ({type: GAME_START});

export const finish = (isFail: boolean): AnyAction =>
    ({type: GAME_FINISH, isFail});

const getDefaultState = (): IGameStore =>
    schema.game;

export default (state: IGameStore = getDefaultState(), {type, isFail}: AnyAction): IGameStore => {
    switch (type) {
        case GAME_START:
            return {state: 'in-progress'};

        case GAME_FINISH:
            return {
                state: isFail ? 'fail' : 'win'
            };
    }

    return state;
};

import {IGameStore, IFieldStore} from 'flux/types';

export interface ISchema {
    readonly game: IGameStore;
    readonly field: IFieldStore;
}

const schema: ISchema = {
    game: {
        state: 'not-started'
    },
    field: {
        history: [],
        position: []
    }
};

export default schema;

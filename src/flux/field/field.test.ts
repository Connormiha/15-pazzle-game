import * as actions from './field';
import {createAppStore} from 'store';
import {Store} from 'redux';
import schema from 'reducers/schema';

const STORE_ID = 'field';

let store: Store;

const getState = () =>
    store.getState()[STORE_ID];

describe('Field store', () => {
    beforeEach(() => {
        store = createAppStore();
    });

    it('should have initial state', () => {
        expect(getState()).toEqual(schema.field);
    });

    it('should generate field', () => {
        store.dispatch(actions.generate(4));
        expect(getState().position).toHaveLength(16);
        expect(new Set(getState().position).size).toBe(16);

        store.dispatch(actions.generate(6));
        expect(getState().position).toHaveLength(36);
        expect(new Set(getState().position).size).toBe(36);
        expect(
            getState().position.reduce((acc: number, next: number) => acc + next, 0)
        ).toBe((1 + 35) * 35 / 2);
    });
});

export type IGameState = 'win' | 'in-progress' | 'not-started' | 'fail';

export interface IGameStore {
    state: IGameState;
}

export interface IFieldStore {
    position: number[];
    history: number[];
}

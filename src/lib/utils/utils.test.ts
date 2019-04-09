import {isCanMove} from './utils';

describe('Utils', () => {
    describe('isCanMove', () => {
        it('should return false', () => {
            const cases: [number[], number][] = [
                [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8], 5
                ],
                [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8], 0
                ]
            ];

            cases.forEach(([positions, target]) => {
                expect(isCanMove(positions, target)).toBe(false);
            });
        });

        it('should return true', () => {
            const cases: [number[], number][] = [
                [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8], 1
                ],
                [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8], 3
                ]
            ];

            cases.forEach(([positions, target]) => {
                expect(isCanMove(positions, target)).toBe(true);
            });
        });
    });
});

export const generateField = (size: number): number[] => {
    const result = [];
    const totalSize = size * size;

    for (let i = 0; i < totalSize; i++) {
        result.push(i);
    }

    arrayShuffle(result);

    return result;
};

const arrayShuffle = (arr: number[]): void => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};

export const moveFieldItem = (fieldPosition: number[], target: number): number[] => {
    const index = fieldPosition.indexOf(target);
    const newPosition = getNewPosition(fieldPosition, index);
    const newField = fieldPosition.slice();
    [newField[index], newField[newPosition]] = [newField[newPosition], newField[index]];

    return newField;
};

const getNewPosition = (fieldPosition: number[], target: number): number => {
    const width = Math.sqrt(fieldPosition.length);
    const row = target / width | 0;
    const col = target % width;

    if (col > 0 && fieldPosition[target - 1] === 0) {
        return target - 1;
    }

    if (col < width - 1 && fieldPosition[target + 1] === 0) {
        return target + 1;
    }

    if (row > 0 && fieldPosition[target - width] === 0) {
        return target - width;
    }

    if (row < width - 1 && fieldPosition[target + width] === 0) {
        return target + width;
    }

    return target;
};

export const isWin = (fieldPosition: number[]): boolean => {
    for (let i = 0; i < fieldPosition.length - 1; i++) {
        if (i + 1 !== fieldPosition[i]) {
            return false;
        }
    }

    return true;
};

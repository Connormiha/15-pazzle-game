export const filedGenerator = (size: number): number[] => {
    const result = [];

    for (let i = 0; i <= size; i++) {
        result.push(i);
    }

    arrayShuffle(result);

    return result;
};

export const arrayShuffle = (arr: number[]): void => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};

export const moveFieldItem = (fieldPosition: number[], target: number): number[] => {
    const newPosition = getNewPosition(fieldPosition, target);
    const newField = fieldPosition.slice();
    [newField[target], newField[newPosition]] = [newField[newPosition], newField[target]];

    return newField;
};

export const getNewPosition = (fieldPosition: number[], target: number): number => {
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

export const move = (arr, target) => {
    const newPosition = getNewPosition(arr, target);
console.warn(newPosition);
[arr[target], arr[newPosition]] = [arr[newPosition], arr[target]];
return arr;
}
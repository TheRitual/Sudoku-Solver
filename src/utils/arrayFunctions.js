export const count = (array, value) => {
    return array.reduce((s, a) => s + (Array.isArray(a) ? count(a, value) : a === value), 0);
}

export const getColumn = (array, column) => {
    return array[column];
}

export const getRow = (array, row) => {
    return array.map(column => column[row]);
}

export const getGroupXY = (field) => {
    const groupX = Math.floor(field.x / 3);
    const groupY = Math.floor(field.y / 3);
    return { x: groupX, y: groupY };
}

export const getGroup = (array, field) => {
    const groupXY = getGroupXY(field);
    let group = [];
    for (let i = 0; i < 3; i++) {
        const trio = array[groupXY.x * 3 + i].slice(groupXY.y * 3, groupXY.y * 3 + 3);
        group = group.concat(trio);
    }
    return group;
}

export const isConflict = (array, field, number) => {
    const row = getRow(array, field.y);
    const col = getColumn(array, field.x);
    const group = getGroup(array, field);
    return !row.includes(number) && !col.includes(number) && !group.includes(number);
}

export const getConflicts = (array, field, number) => {
    let result = [];
    const row = getRow(array, field.y);
    row.includes(number) && result.push({ x: row.indexOf(number), y: field.y });
    const col = getColumn(array, field.x);
    col.includes(number) && result.push({ x: field.x, y: col.indexOf(number) });
    const group = getGroup(array, field);
    const numberIndex = group.indexOf(number);
    const groupXY = getGroupXY(field);
    const addX = Math.floor(numberIndex / 3);
    const addY = numberIndex % 3;
    group.includes(number) && result.push({ x: groupXY.x * 3 + addX, y: groupXY.y * 3 + addY });
    return result;
}

export const combineArrays = (main, additional) => {
    const result = main.map((col, x) => {
        return col.map((row, y) => {
            return main[x][y] === null ? additional[x][y] : main[x][y];
        });;
    });
    return result;
}
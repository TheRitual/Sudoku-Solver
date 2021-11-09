export const count = (array, value) => {
    return array.reduce((s, a) => s + (Array.isArray(a) ? count(a, value) : a === value), 0);
}

export const getColumn = (array, column) => {
    return array[column];
}

export const getRow = (array, row) => {
    return array.map(column => column[row]);
}

export const getGroup = (array, field) => {
    const groupX = Math.floor(field.x / 3);
    const groupY = Math.floor(field.y / 3);
    let group = [];
    for (let i = 0; i < 3; i++) {
        const trio = array[groupX * 3 + i].slice(groupY * 3, groupY * 3 + 3);
        group = group.concat(trio);
    }
    return group;
}

export const getGroupXY = (field) => {
    const groupX = Math.floor(field.x / 3);
    const groupY = Math.floor(field.y / 3);
    return { gx: groupX, gy: groupY };
}

export const isConflict = (array, field, number) => {
    const row = getRow(array, field.y);
    const col = getColumn(array, field.x);
    const group = getGroup(array, field);
    return !row.includes(number) && !col.includes(number) && !group.includes(number);
}

export const getConflicts = (array, field, number) => {
    const row = getRow(array, field.y);
    const col = getColumn(array, field.x);
    const group = getGroup(array, field);
    return { row: row.includes(number), col: col.includes(number), group: group.includes(number) };
}
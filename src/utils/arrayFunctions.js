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
    const row = getRow(array, field.y);
    const rowConflict = row.includes(number) ? { x: row.indexOf(number), y: field.y } : null;
    const col = getColumn(array, field.x);
    const colConflict = col.includes(number) ? { x: field.x, y: col.indexOf(number) } : null;
    const group = getGroup(array, field);
    const groupConflict = group.includes(number) ? null : null;
    return { row: rowConflict, col: colConflict, group: groupConflict };
}
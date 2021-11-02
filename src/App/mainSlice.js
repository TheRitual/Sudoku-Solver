import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'sudokuSolver',
    initialState: {
        given : new Array(9).fill(null).map(() => new Array(9).fill(null)),
        activeField: {x: 0, y: 0},
        numbers : new Array(9).fill(9),
        activeNumber: 1,
        lastKey: null,
        
    },
    reducers: {
        setGiven: (state, { payload: table }) => {
            state.given = table;
        },
        setActiveField: (state, {payload: field}) => {
            state.activeField = field;
        },
        setLastKey: (state, {payload: key}) => {
            state.lastKey = key;
        },
        setNumbers: (state, {payload: change}) => {
            state.numbers[change.index] = change.value;
        }
    }
});

export const {
    setGiven,
    setActiveField,
    setLastKey,
    setNumbers,
} = mainSlice.actions;

export const selectSudokuSolverSaga = state => state.sudokuSolver;
export const selectGiven = state => selectSudokuSolverSaga(state).given;
export const selectNumbers = state => selectSudokuSolverSaga(state).numbers;
export const selectActiveField = state => selectSudokuSolverSaga(state).activeField;
export const selectLastKey = state => selectSudokuSolverSaga(state).lastKey;


export default mainSlice.reducer;
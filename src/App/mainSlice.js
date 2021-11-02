import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'sudokuSolver',
    initialState: {
        given : new Array(9).fill(null).map(() => new Array(9).fill(null)),
        activeField: {x: 0, y: 0},
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
        }
        
    }
});

export const {
    setGiven,
    setActiveField,
    setLastKey,
} = mainSlice.actions;

export const selectSudokuSolverSaga = state => state.sudokuSolver;
export const selectGiven = state => selectSudokuSolverSaga(state).given;
export const selectActiveField = state => selectSudokuSolverSaga(state).activeField;
export const selectLastKey = state => selectSudokuSolverSaga(state).lastKey;


export default mainSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'sudokuSolver',
    initialState: {
        given: new Array(9).fill(null).map(() => new Array(9).fill(null)),
        custom: new Array(9).fill(null).map(() => new Array(9).fill(null)),
        activeField: { x: 0, y: 0 },
        lastClicked: null,
        numbers: new Array(9).fill(9),
        activeNumber: 1,
        lastKey: null,
        conflicts: null,
        mode: "given",
    },
    reducers: {
        setGiven: (state, { payload: change }) => {
            state.given[change.x][change.y] = change.value;
        },
        setCustom: (state, { payload: change }) => {
            state.custom[change.x][change.y] = change.value;
        },
        setActiveField: (state, { payload: field }) => {
            state.activeField = field;
        },
        setLastClicked: (state, { payload: field }) => {
            state.lastClicked = field;
        },
        setLastKey: (state, { payload: key }) => {
            state.lastKey = key;
        },
        setConflicts: (state, { payload: conflicts }) => {
            state.conflicts = conflicts;
        },
        setNumbers: (state, { payload: change }) => {
            state.numbers[change.index] = change.value;
        },
        setActiveNumber: (state, { payload: number }) => {
            state.activeNumber = number;
        },
        clearAll: (state) => {
            state.given = new Array(9).fill(null).map(() => new Array(9).fill(null));
            state.custom = new Array(9).fill(null).map(() => new Array(9).fill(null));
            state.numbers = new Array(9).fill(9);
        },
        clearCustom: (state) => {
            state.custom = new Array(9).fill(null).map(() => new Array(9).fill(null));
        },
        setMode: (state, { payload: mode }) => {
            state.mode = mode;
        },
        solve: (state) => {
            state.mode = "solving";
        },
        insertNumber: () => { },
        
    }
});

export const {
    setGiven,
    setCustom,
    setActiveField,
    setLastKey,
    setNumbers,
    setActiveNumber,
    insertNumber,
    clearAll,
    clearCustom,
    setConflicts,
    setLastClicked,
    setMode,
    solve,
} = mainSlice.actions;

export const selectSudokuSolverSaga = state => state.sudokuSolver;
export const selectGiven = state => selectSudokuSolverSaga(state).given;
export const selectCustom = state => selectSudokuSolverSaga(state).custom;
export const selectNumbers = state => selectSudokuSolverSaga(state).numbers;
export const selectActiveField = state => selectSudokuSolverSaga(state).activeField;
export const selectLastClicked = state => selectSudokuSolverSaga(state).lastClicked;
export const selectActiveNumber = state => selectSudokuSolverSaga(state).activeNumber;
export const selectLastKey = state => selectSudokuSolverSaga(state).lastKey;
export const selectConflicts = state => selectSudokuSolverSaga(state).conflicts;
export const selectMode = state => selectSudokuSolverSaga(state).mode;

export default mainSlice.reducer;
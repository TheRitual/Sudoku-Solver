import { createSlice } from "@reduxjs/toolkit";
import { modeParams } from "./globalParams";

const mainSlice = createSlice({
    name: 'sudokuSolver',
    initialState: {
        numbers: new Array(9).fill(9),
        activeNumber: 1,
        mode: modeParams.GIVEN,
        intention: null,
    },
    reducers: {
        setDiagram: (state, {payload: diagram}) => {
            state.diagram = diagram;
        },
        setNumbers: (state, { payload: change }) => {
            state.numbers[change.index] = change.value;
        },
        setActiveNumber: (state, { payload: number }) => {
            state.activeNumber = number;
        },
        clearCustom: (state) => {
            state.custom = new Array(9).fill(null).map(() => new Array(9).fill(null));
        },
        setMode: (state, { payload: mode }) => {
            state.mode = mode;
        },
        setIntention: (state, {payload: intention}) => {
            state.intention = intention;
        }
    }
});

export const {
    setDiagram,
    setNumbers,
    setActiveNumber,
    setMode,
    setIntention,
} = mainSlice.actions;

export const selectSudokuSolverSaga = state => state.sudokuSolver;
export const selectNumbers = state => selectSudokuSolverSaga(state).numbers;
export const selectActiveNumber = state => selectSudokuSolverSaga(state).activeNumber;
export const selectMode = state => selectSudokuSolverSaga(state).mode;

export default mainSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { getNullDiagram } from "../utils/arrayFunctions";
import { modeParams } from "./globalParams";

const mainSlice = createSlice({
    name: 'sudokuSolver',
    initialState: {
        diagram: getNullDiagram(),
        numbers: new Array(9).fill(9),
        activeNumber: 1,
        mode: modeParams.GIVEN,
        intention: null,
    },
    reducers: {
        setDiagram: (state, {payload: diagram}) => {
            state.diagram = diagram;
            state.intention = null;
        },
        clearDiagram: (state) => {
            state.diagram = getNullDiagram();
            state.numbers = new Array(9).fill(9)
            state.intention = null;
        },
        setNumbers: (state, { payload: numbers }) => {
            state.numbers = numbers;
        },
        setDiagramAndNumbers: (state, {payload}) => {
            state.diagram = payload.diagram;
            state.numbers = payload.numbers;
            state.intention = null;
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
    clearDiagram,
    setNumbers,
    setDiagramAndNumbers,
    setActiveNumber,
    setMode,
    setIntention,
} = mainSlice.actions;

export const selectSudokuSolverSaga = state => state.sudokuSolver;
export const selectDiagram = state => selectSudokuSolverSaga(state).diagram;
export const selectNumbers = state => selectSudokuSolverSaga(state).numbers;
export const selectActiveNumber = state => selectSudokuSolverSaga(state).activeNumber;
export const selectMode = state => selectSudokuSolverSaga(state).mode;
export const selectIntention = state => selectSudokuSolverSaga(state).intention;

export default mainSlice.reducer;
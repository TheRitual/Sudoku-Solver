import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'sudokuSolver',
    initialState: {
        given : [[]],
    },
    reducers: {
        setGiven: (state, { payload: table }) => {
            state.given = table;
        },
    }
});

export const {
    setError,
} = mainSlice.actions;

export const selectSudokuSolverSaga = state => state.sudokuSolver;
export const selectGiven = state => selectSudokuSolverSaga(state).given;


export default mainSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { getNullDiagram } from "../utils/arrayFunctions";
import solvingParams from "./solvingParams";

const solvingSlice = createSlice({
    name: 'solving',
    initialState: {
        base: getNullDiagram(),
        working: getNullDiagram(),
        method: solvingParams.NONE,
    },
    reducers: {
        setBase: (state, {payload: diagram}) => {
            state.base = diagram;
        },
        setWorking: (state, {payload: diagram}) => {
            state.working = diagram;
        },
        setMethod: (state, {payload: method}) => {
            state.method = method;
        },
        copyBaseToWorking: (state) => {
            state.working = state.base;
        },
    }
});

export const {
    setBase,
    setWorking,
    setMethod,
    copyBaseToWorking,
} = solvingSlice.actions;

export const selectSolvingSaga = state => state.solving;
export const selectBase = state => selectSolvingSaga(state).base;
export const selectWorking = state => selectSolvingSaga(state).working;
export const selectMethod = state => selectSolvingSaga(state).method;

export default solvingSlice.reducer;
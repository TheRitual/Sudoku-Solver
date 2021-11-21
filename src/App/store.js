import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import sudokuSolverReducer from "./mainSlice";
import solvingReducer from "../Solver/solverSlice";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        sudokuSolver: sudokuSolverReducer,
        solving: solvingReducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
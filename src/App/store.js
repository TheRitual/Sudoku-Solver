import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import sudokuSolverReducer from "./mainSlice";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        sudokuSolver: sudokuSolverReducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
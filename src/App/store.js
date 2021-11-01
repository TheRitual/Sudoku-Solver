import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import moviesBrowserReducer from "../../features/moviesBrowser/moviesBrowserSlice";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        moviesBrowser: moviesBrowserReducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
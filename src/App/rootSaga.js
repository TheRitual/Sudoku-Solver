import { all } from "@redux-saga/core/effects";
import { mainSaga } from "./mainSaga"

function* rootSaga () {
    yield all([
        mainSaga(),
    ])
}

export default rootSaga;
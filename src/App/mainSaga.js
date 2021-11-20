/*import { takeLatest, put, call, select } from "redux-saga/effects";
import { countNumbers } from "../utils/arrayFunctions";
import { setDiagram, setNumbers, selectDiagram } from "./mainSlice";

function* calculateNumbersAmount() {
    const diagram = yield select(selectDiagram);
    const newNumbers = yield call(countNumbers, diagram);
    yield put(setNumbers(newNumbers));
}
*/
export function* mainSaga() {
    //yield takeLatest(setDiagram.type, calculateNumbersAmount);
}
import { clearAll, insertNumber, selectActiveField, selectActiveNumber, selectGiven, selectLastKey, setActiveField, setActiveNumber, setConflicts, setGiven, setLastKey, setNumbers } from "./mainSlice";
import { select, put, takeLatest, call } from 'redux-saga/effects'
import { count, getConflicts, isConflict } from '../utils/arrayFunctions'

function* keyReaction() {
    const key = yield select(selectLastKey);
    const activeField = yield select(selectActiveField);
    switch (key) {
        case "1":
            yield put(setActiveNumber(1)); break;
        case "2":
            yield put(setActiveNumber(2)); break;
        case "3":
            yield put(setActiveNumber(3)); break;
        case "4":
            yield put(setActiveNumber(4)); break;
        case "5":
            yield put(setActiveNumber(5)); break;
        case "6":
            yield put(setActiveNumber(6)); break;
        case "7":
            yield put(setActiveNumber(7)); break;
        case "8":
            yield put(setActiveNumber(8)); break;
        case "9":
            yield put(setActiveNumber(9)); break;
        case "c":
            yield put(clearAll()); break;
        case "ArrowUp":
        case "w":
            yield activeField.y > 0 && put(setActiveField({ x: activeField.x, y: activeField.y - 1 })); break;
        case "ArrowDown":
        case "s":
            yield activeField.y < 8 && put(setActiveField({ x: activeField.x, y: activeField.y + 1 })); break;
        case "ArrowLeft":
        case "a":
            yield activeField.x > 0 && put(setActiveField({ x: activeField.x - 1, y: activeField.y })); break;
        case "ArrowRight":
        case "d":
            yield activeField.x < 8 && put(setActiveField({ x: activeField.x + 1, y: activeField.y })); break;
        default: break;
    }
    // const x = yield call(normal function);
}

function* applyingNumber() {
    const activeField = yield select(selectActiveField);
    const activeNumber = yield select(selectActiveNumber);
    const given = yield select(selectGiven);
    const oldNumber = yield given[activeField.x][activeField.y];
    const newNumber = yield activeNumber - 1;
    const isOk = yield call(isConflict, given, activeField, activeNumber);
    if (isOk) {
        yield put(setGiven({ x: activeField.x, y: activeField.y, value: activeNumber }));
        const changedGiven = yield select(selectGiven);
        const newAmount = yield 9 - count(changedGiven, activeNumber);
        yield put(setNumbers({ index: newNumber, value: newAmount }));
        if (oldNumber) {
            const oldAmount = yield 9 - count(changedGiven, oldNumber);
            yield put(setNumbers({ index: oldNumber - 1, value: oldAmount }));
        }
    } else {
        const conflicts = yield getConflicts(given, activeField, activeNumber);
        yield put(setConflicts(conflicts));
    }
}

export function* mainSaga() {
    yield takeLatest(setLastKey.type, keyReaction);
    yield takeLatest(insertNumber.type, applyingNumber);
    //yield debounce(<time>, <action>.type, <generator>);
}
import { clearAll, insertNumber, selectActiveField, selectActiveNumber, selectCustom, selectGiven, selectLastKey, selectMode, setActiveField, setActiveNumber, setConflicts, setCustom, setGiven, setLastClicked, setLastKey, setMode, setNumbers } from "./mainSlice";
import { select, put, takeLatest, call } from 'redux-saga/effects'
import { combineArrays, count, getConflicts, isConflict } from '../utils/arrayFunctions'

function* keyReaction() {
    const key = yield select(selectLastKey);
    const activeField = yield select(selectActiveField);
    switch (key) {
        case "0":
            yield put(setActiveNumber(0)); break;
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
        case "o":
            yield put(setMode("given")); break;
        case "p":
            yield put(setMode("custom")); break;
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
}

function* applyingNumber() {
    const mode = yield select(selectMode);
    if (mode !== "solving") {
        const activeField = yield select(selectActiveField);
        yield put(setLastClicked(activeField));
        const activeNumber = yield select(selectActiveNumber);
        yield put(setConflicts(null));
        const given = yield select(selectGiven);
        const custom = yield select(selectCustom);
        const combined = yield call(combineArrays, given, custom);
        const oldNumber = yield mode === "given" ? given[activeField.x][activeField.y] : custom[activeField.x][activeField.y];
        const newNumber = yield activeNumber - 1;
        const isOk = yield call(isConflict, combined, activeField, activeNumber);
        if (isOk) {
            const val = yield { x: activeField.x, y: activeField.y, value: activeNumber === 0 ? null : activeNumber };
            console.log(mode, val);
            if (mode === "given") {
                yield put(setGiven(val));
                const clearCustomField = yield { x: activeField.x, y: activeField.y, value: null };
                yield put(setCustom(clearCustomField));
            } else {
                yield given[activeField.x][activeField.y] === null && put(setCustom(val));
            }
            const newGiven = yield select(selectGiven);
            const newCustom = yield select(selectCustom);
            const changedArray = yield call(combineArrays, newGiven, newCustom);
            const newAmount = yield 9 - count(changedArray, activeNumber);
            yield put(setNumbers({ index: newNumber, value: newAmount }));
            if (oldNumber) {
                const oldAmount = yield 9 - count(changedArray, oldNumber);
                yield put(setNumbers({ index: oldNumber - 1, value: oldAmount }));
            }
        } else {
            const conflicts = yield getConflicts(combined, activeField, activeNumber);
            yield put(setConflicts(conflicts));
        }
    }
}

export function* mainSaga() {
    yield takeLatest(setLastKey.type, keyReaction);
    yield takeLatest(insertNumber.type, applyingNumber);
}
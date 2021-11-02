import { selectActiveField, selectLastKey, setActiveField, setLastKey } from "./mainSlice";
import { select, put, takeLatest } from 'redux-saga/effects'

function* keyReaction() {
    const key = yield select(selectLastKey);
    const activeField = yield select(selectActiveField);
    console.log(key);
    console.log(activeField);
    switch (key) {
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
    console.log(key);
    console.log(activeField);
    // const x = yield call(normal function);
}

export function* mainSaga() {
    yield takeLatest(setLastKey.type, keyReaction);
    //yield debounce(<time>, <action>.type, <generator>);
}
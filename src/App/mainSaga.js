/*

function* applyingNumber() {
    const mode = yield select(selectMode);
    const activeField = yield select(selectActiveField);
    const activeNumber = yield select(selectActiveNumber);
    const given = yield select(selectGiven);
    const custom = yield select(selectCustom);
    const combined = yield call(combineArrays, given, custom);
    yield put(setLastClicked(activeField));
    yield put(setConflicts(null));
    const oldNumber = yield mode === "given" ? given[activeField.x][activeField.y] : custom[activeField.x][activeField.y];
    const newNumber = yield activeNumber - 1;
    const isOk = yield call(isConflict, combined, activeField, activeNumber);
    if (isOk) {
        const val = yield { x: activeField.x, y: activeField.y, value: activeNumber === 0 ? null : activeNumber };
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
        const counted = yield call(count, changedArray, activeNumber);
        const newAmount = yield 9 - counted;
        yield put(setNumbers({ index: newNumber, value: newAmount }));
        if (oldNumber) {
            const counted = yield call(count, changedArray, oldNumber);
            const oldAmount = yield 9 - counted;
            yield put(setNumbers({ index: oldNumber - 1, value: oldAmount }));
        }
    } else {
        const conflicts = yield getConflicts(combined, activeField, activeNumber);
        yield put(setConflicts(conflicts));
    }
    
}

function* calculateNumbersAmount() {
    const given = yield select(selectGiven);
    for (let i = 0; i < 9; i++) {
        const counted = yield call(count, given, i + 1);
        const newAmount = yield 9 - counted;
        yield put(setNumbers({ index: i, value: newAmount }));
    }
}

*/

export function* mainSaga() {

}
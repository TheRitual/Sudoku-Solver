import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { intentions, modeParams } from "../../App/globalParams";
import { changeOneValue, combineArrays, countNumbers, getConflicts, getNullDiagram } from "../../utils/arrayFunctions";
import { useLocalState } from "../../utils/customHooks";
import diagramParamNames from "./diagramParamNames";
import {
    setActiveNumber,
    setDiagramAndNumbers,
    setIntention,
    setMode,
    clearDiagram,
    selectActiveNumber,
    selectIntention,
    selectMode,
} from "../../App/mainSlice";

export const useDiagrams = () => {
    const dispatch = useDispatch();
    const [given, setGiven] = useLocalState(diagramParamNames.GIVEN, getNullDiagram());
    const [custom, setCustom] = useLocalState(diagramParamNames.CUSTOM, getNullDiagram());
    const combined = combineArrays(given, custom);
    const [conflicts, setConflicts] = useState([]);
    const activeNumber = useSelector(selectActiveNumber);
    const mode = useSelector(selectMode);
    const intention = useSelector(selectIntention);

    useEffect(() => {
        dispatch(setDiagramAndNumbers({ diagram: combined, numbers: countNumbers(combined) })); // eslint-disable-next-line
    }, []);

    const setField = (x, y) => {
        setConflicts([]);
        const conflicts = getConflicts(combined, { x: x, y: y }, activeNumber);
        const newNumber = activeNumber === 0 ? null : activeNumber;
        const table = changeOneValue(mode === modeParams.GIVEN ? given : custom, x, y, newNumber);
        if (conflicts.length === 0) {
            if (mode === modeParams.GIVEN) {
                setGiven(table);
                const newCombined = combineArrays(table, custom);
                dispatch(setDiagramAndNumbers({ diagram: newCombined, numbers: countNumbers(newCombined) }));
            } else {
                if (given[x][y] === null) {
                    setCustom(table);
                    const newCombined = combineArrays(given, table);
                    dispatch(setDiagramAndNumbers({ diagram: newCombined, numbers: countNumbers(newCombined) }));
                }
            }
        } else {
            setConflicts(conflicts)
        }
    }

    useEffect(() => {
        switch (intention) {
            case intentions.CLEAR_ALL:
                setGiven(getNullDiagram());
                setCustom(getNullDiagram());
                dispatch(clearDiagram());
                break;
            case intentions.CLEAR_CUSTOM:
                setCustom(getNullDiagram());
                dispatch(setDiagramAndNumbers({ diagram: given, numbers: countNumbers(given) }));
                break;
            default: ;
        }
    }, [intention, dispatch, setCustom, setGiven, given]);

    return [given, combined, conflicts, setField]
}

export const useKeyboard = (activeField, setActiveField) => {
    const dispatch = useDispatch();
    const [key, setKey] = useState("");

    const keyReaction = (key) => {
        switch (key) {
            case "0":
                dispatch(setActiveNumber(0)); break;
            case "1":
                dispatch(setActiveNumber(1)); break;
            case "2":
                dispatch(setActiveNumber(2)); break;
            case "3":
                dispatch(setActiveNumber(3)); break;
            case "4":
                dispatch(setActiveNumber(4)); break;
            case "5":
                dispatch(setActiveNumber(5)); break;
            case "6":
                dispatch(setActiveNumber(6)); break;
            case "7":
                dispatch(setActiveNumber(7)); break;
            case "8":
                dispatch(setActiveNumber(8)); break;
            case "9":
                dispatch(setActiveNumber(9)); break;
            case "c":
                dispatch(setIntention(intentions.CLEAR_ALL)); break;
            case "b":
                dispatch(setIntention(intentions.CLEAR_CUSTOM)); break;
            case "o":
                dispatch(setMode(modeParams.GIVEN)); break;
            case "p":
                dispatch(setMode(modeParams.CUSTOM)); break;
            case "ArrowUp":
                activeField.y > 0 && setActiveField({ x: activeField.x, y: activeField.y - 1 }); break;
            case "w":
                activeField.y > 0 && setActiveField({ x: activeField.x, y: activeField.y - 1 }); break;
            case "ArrowDown":
                activeField.y < 8 && setActiveField({ x: activeField.x, y: activeField.y + 1 }); break;
            case "s":
                activeField.y < 8 && setActiveField({ x: activeField.x, y: activeField.y + 1 }); break;
            case "ArrowLeft":
                activeField.x > 0 && setActiveField({ x: activeField.x - 1, y: activeField.y }); break;
            case "a":
                activeField.x > 0 && setActiveField({ x: activeField.x - 1, y: activeField.y }); break;
            case "ArrowRight":
                activeField.x < 8 && setActiveField({ x: activeField.x + 1, y: activeField.y }); break;
            case "d":
                activeField.x < 8 && setActiveField({ x: activeField.x + 1, y: activeField.y }); break;
            default: break;
        }
        setKey("");
    };

    useEffect(() => {
        const keyAction = (event) => {
            switch (event.key) {
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight": event.preventDefault(); break;
                default: ;
            }
            setKey(event.key);
        }

        window.addEventListener("keydown", keyAction);
    }, []);

    useEffect(() => {
        keyReaction(key); // eslint-disable-next-line
    }, [key]);
}
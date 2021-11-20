import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectActiveNumber, selectMode } from "../../App/mainSlice";
import { useDiagrams } from "./diagramHooks";
import diagramParamNames from "./diagramParamNames";
import { Field, FieldButton, Grid } from "./styled";
import { modeParams } from "../../App/globalParams";

const Diagram = () => {
    const grid = useRef(null);
    const [given, combined, conflicts, setGivenField, setCustomField] = useDiagrams();
    const activeNumber = useSelector(selectActiveNumber);
    const [activeField, setActiveField] = useState({ x: 4, y: 4 });
    const [lastClicked, setLastClicked] = useState({ x: null, y: null });
    const mode = useSelector(selectMode);

    const isConflict = (x, y) => {
        return conflicts && conflicts.some(conflict => conflict.x === x && conflict.y === y);
    }

    const applyNumber = (x, y) => {
        console.log(`APPLYING NUMBER ON FIELD (${x} ,${y})`);
        setLastClicked({x: x, y: y});
    }

    useEffect(() => {
        const fields = Array.prototype.slice.call(grid.current.children);
        const active = fields.find(child =>
            child.children[0].attributes.x.value === activeField.x.toString()
            &&
            child.children[0].attributes.y.value === activeField.y.toString()
        );
        active.children[0].focus()
    }, [activeField]);

    return (
        <Grid ref={grid}>
            {
                combined.map((y, ix) => {
                    return y.map((x, iy) => {
                        return (
                            <Field key={ix + "-" + iy} x={ix} y={iy}>
                                <FieldButton
                                    onMouseOver={(e) => e.target.focus()}
                                    onClick={() => { mode !== modeParams.SOLVING && applyNumber(ix, iy) }}
                                    x={ix}
                                    y={iy}
                                    isSolving={mode === modeParams.SOLVING}
                                    isGiven={given[ix][iy] !== null}
                                    activeNumber={activeNumber}
                                    clickedRow={lastClicked && lastClicked.x === ix}
                                    clickedCol={lastClicked && lastClicked.y === iy}
                                    isLastClicked={lastClicked && ix === lastClicked.x && iy === lastClicked.y}
                                    isConflict={isConflict(ix, iy)}
                                    isActive={ix === activeField.x && iy === activeField.y}
                                    numberMatch={x === activeNumber}
                                    onFocus={() => { console.log(activeField.x, activeField.y ); activeField.x !== ix && activeField.y !== iy && setActiveField({ x: ix, y: iy }) }}>
                                    {x}
                                </FieldButton>
                            </Field>
                        );
                    });
                })
            }
        </Grid>
    );
}

export default Diagram;


/*
    

    return (
        <Grid ref={grid}>
            {
                combined.map((y, ix) => {
                    return y.map((x, iy) => {
                        return (
                            <Field key={ix + "-" + iy} x={ix} y={iy}>
                                <FieldButton
                                    onMouseOver={(e) => e.target.focus()}
                                    onClick={() => { mode !== "solving" && applyNumber() }}
                                    x={ix}
                                    y={iy}
                                    isSolving={mode === "solving"}
                                    isGiven={given[ix][iy] !== null}
                                    activeNumber={activeNumber}
                                    clickedRow={lastClicked && lastClicked.x === ix}
                                    clickedCol={lastClicked && lastClicked.y === iy}
                                    isLastClicked={lastClicked && ix === lastClicked.x && iy === lastClicked.y}
                                    isConflict={isConflict(ix, iy)}
                                    isActive={ix === activeField.x && iy === activeField.y}
                                    numberMatch={x === activeNumber}
                                    onFocus={() => { activeField.x !== ix && activeField.y !== iy && dispatch(setActiveField({ x: ix, y: iy })) }}>
                                    {x}
                                </FieldButton>

    );

useEffect(() => {
        window.addEventListener("keydown", keyReaction); // eslint-disable-next-line
    }, []);

    const keyReaction = (event) => {
        switch (event.key) {
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
                dispatch(clearAll()); break;
            case "b":
                dispatch(clearCustom()); break;
            case "o":
                dispatch(setMode("given")); break;
            case "p":
                dispatch(setMode("custom")); break;
            case "ArrowUp":
                event.preventDefault(); activeField.y > 0 && dispatch(setActiveField({ x: activeField.x, y: activeField.y - 1 })); break;
            case "w":
                activeField.y > 0 && dispatch(setActiveField({ x: activeField.x, y: activeField.y - 1 })); break;
            case "ArrowDown":
                event.preventDefault(); activeField.y < 8 && dispatch(setActiveField({ x: activeField.x, y: activeField.y + 1 })); break;
            case "s":
                activeField.y < 8 && dispatch(setActiveField({ x: activeField.x, y: activeField.y + 1 })); break;
            case "ArrowLeft":
                event.preventDefault(); activeField.x > 0 && dispatch(setActiveField({ x: activeField.x - 1, y: activeField.y })); break;
            case "a":
                activeField.x > 0 && dispatch(setActiveField({ x: activeField.x - 1, y: activeField.y })); break;
            case "ArrowRight":
                event.preventDefault(); activeField.x < 8 && dispatch(setActiveField({ x: activeField.x + 1, y: activeField.y })); break;
            case "d":
                activeField.x < 8 && dispatch(setActiveField({ x: activeField.x + 1, y: activeField.y })); break;
            default: break;
        }
    };

*/
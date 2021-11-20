import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectActiveNumber, selectMode } from "../../App/mainSlice";
import { useDiagrams, useKeyboard } from "./diagramHooks";
import { Field, FieldButton, Grid } from "./styled";
import { modeParams } from "../../App/globalParams";

const Diagram = () => {
    const grid = useRef(null);
    const [given, combined, conflicts, setField] = useDiagrams();
    const [activeField, setActiveField] = useState({ x: 4, y: 4 });
    const activeNumber = useSelector(selectActiveNumber);
    const [lastClicked, setLastClicked] = useState({ x: null, y: null });
    const mode = useSelector(selectMode);

    useKeyboard(activeField, setActiveField);

    const isConflict = (x, y) => {
        return conflicts && conflicts.some(conflict => conflict.x === x && conflict.y === y);
    }

    const applyNumber = (x, y) => {
        setLastClicked({ x: x, y: y });
        setField(x, y);
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
                                    onFocus={() => { setActiveField({ x: ix, y: iy }) }}>
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
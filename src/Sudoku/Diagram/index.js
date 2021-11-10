import { Field, Grid, FieldButton } from "./styled";
import { useDispatch } from "react-redux";
import { insertNumber, selectActiveField, selectActiveNumber, selectConflicts, selectGiven, selectLastClicked, setActiveField } from "../../App/mainSlice";
import { useSelector } from "react-redux";
import React, { useEffect, useRef } from "react";

const Diagram = () => {
    const grid = useRef(null);
    const dispatch = useDispatch();
    const activeField = useSelector(selectActiveField);
    const lastClicked = useSelector(selectLastClicked);
    const activeNumber = useSelector(selectActiveNumber);
    const conflicts = useSelector(selectConflicts);
    const given = useSelector(selectGiven);

    useEffect(() => {
        const fields = Array.prototype.slice.call(grid.current.children);
        const active = fields.find(child =>
            child.children[0].attributes.x.value === activeField.x.toString()
            &&
            child.children[0].attributes.y.value === activeField.y.toString()
        );
        active.children[0].focus()
    }, [activeField]);

    const applyNumber = () => {
        dispatch(insertNumber());
    }

    const isConflict = (x, y) => {
        return conflicts && conflicts.some(conflict => conflict.x === x && conflict.y === y);
    }

    return (
        <Grid ref={grid}>
            {
                given.map((y, ix) => {
                    return y.map((x, iy) => {
                        return (
                            <Field key={ix + "-" + iy} x={ix} y={iy}>
                                <FieldButton
                                    onMouseOver={(e) => e.target.focus()}
                                    onClick={() => applyNumber()}
                                    x={ix}
                                    y={iy}
                                    activeNumber={activeNumber}
                                    clickedRow={lastClicked && lastClicked.x === ix}
                                    clickedCol={lastClicked && lastClicked.y === iy}
                                    isLastClicked={lastClicked && ix === lastClicked.x && iy === lastClicked.y}
                                    isConflict={isConflict(ix, iy)}
                                    isActive={ix === activeField.x && iy === activeField.y}
                                    numberMatch={x === activeNumber}
                                    onFocus={() => dispatch(setActiveField({ x: ix, y: iy }))}>
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
import { Field, Grid, FieldButton } from "./styled";
import { useDispatch } from "react-redux";
import { insertNumber, selectActiveField, selectGiven, setActiveField } from "../../App/mainSlice";
import { useSelector } from "react-redux";
import React, { useEffect, useRef } from "react";

const Diagram = () => {
    const grid = useRef(null);
    const dispatch = useDispatch();
    const activeField = useSelector(selectActiveField);
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

    return (
        <Grid ref={grid}>
            {
                given.map((y, ix) => {
                    return y.map((x, iy) => {
                        return (
                            <Field key={ix + "-" + iy} x={ix} y={iy}>
                                <FieldButton
                                    activeX={activeField.x}
                                    onMouseOver={(e) => e.target.focus()}
                                    activeY={activeField.y}
                                    onClick={() => applyNumber()}
                                    x={ix}
                                    y={iy}
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
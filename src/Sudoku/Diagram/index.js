import { Field, Grid, FieldButton } from "./styled";
import { useDispatch } from "react-redux";
import { selectActiveField, selectGiven, setActiveField } from "../../App/mainSlice";
import { useSelector } from "react-redux";

const Diagram = () => {
    const dispatch = useDispatch();
    const activeField = useSelector(selectActiveField);
    const given = useSelector(selectGiven);

    return (
        <Grid>
            {
                given.map((y, ix) => {
                    return y.map((x, iy) => {
                        return (
                            <Field key={ix + "-" + iy} x={ix} y={iy} onMouseEnter={() => dispatch(setActiveField({x: ix, y: iy}))}>
                                <FieldButton activeX={activeField.x} activeY={activeField.y} x={ix} y={iy} onFocus={() => dispatch(setActiveField({x: ix, y: iy}))}>
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
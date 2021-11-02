import { Field, Grid, FieldButton } from "./styled";
import { useState } from 'react';

const Diagram = () => {
    let board = new Array(9).fill(null).map(() => new Array(9).fill(null));

    const [activeX, setActiveX] = useState(10);
    const [activeY, setActiveY] = useState(10);

    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            board[x][y] = x + "." + y;
        }
    }

    const setCoordinates = (x, y) => {
        setActiveX(x);
        setActiveY(y);
    }

    return (
        <Grid>
            {
                board.map((y, ix) => {
                    return y.map((x, iy) => {
                        return (
                            <Field key={ix + "-" + iy} x={ix} y={iy} onMouseEnter={() => setCoordinates(ix, iy)} onMouseLeave={() => setCoordinates(10, 10)}>
                                <FieldButton activeX={activeX} activeY={activeY} x={ix} y={iy}>
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
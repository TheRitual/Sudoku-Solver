import { Field, Grid, FieldButton } from "./styled";
import { useState } from 'react';

const Diagram = () => {
    let board = new Array(9).fill(null).map(() => new Array(9).fill(null));

    const [activeX, setActiveX] = useState(0);
    const [activeY, setActiveY] = useState(0);

    const setCoordinates = (x, y) => {
        setActiveX(x);
        setActiveY(y);
    }

    const moveActive = (event) => {
        switch (event.key) {
            case "ArrowUp": event.preventDefault(); // eslint-disable-next-line
            case "w":
                activeY > 0 && setActiveY(activeY - 1); break;
            case "ArrowDown":  event.preventDefault(); // eslint-disable-next-line
            case "s":
                activeY < 8 && setActiveY(activeY + 1); break;
            case "ArrowLeft":  event.preventDefault(); // eslint-disable-next-line
            case "a":
                activeX > 0 && setActiveX(activeX - 1); break;
            case "ArrowRight":  event.preventDefault(); // eslint-disable-next-line
            case "d":
                activeX < 8 && setActiveX(activeX + 1); break;
            default: break;
        }
    }

    return (
        <Grid onKeyDown={moveActive}>
            {
                board.map((y, ix) => {
                    return y.map((x, iy) => {
                        return (
                            <Field key={ix + "-" + iy} x={ix} y={iy} onMouseEnter={() => setCoordinates(ix, iy)} onMouseLeave={() => setCoordinates(4, 4)}>
                                <FieldButton activeX={activeX} activeY={activeY} x={ix} y={iy} onFocus={() => setCoordinates(ix, iy)}>
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
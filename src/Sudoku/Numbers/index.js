import { useDispatch, useSelector } from "react-redux";
import { selectActiveNumber, selectNumbers, setActiveNumber } from "../../App/mainSlice";
import { Amount, Number, NumberField, NumbersGrid } from "./styled";

const Numbers = () => {
    const numbers = useSelector(selectNumbers);
    const dispatch = useDispatch();
    const activeNumber = useSelector(selectActiveNumber);
    const onNumberSelect = (number) => {
        dispatch(setActiveNumber(number));
    }

    return (
        <NumbersGrid>
            {
                numbers.map((amount, index) => {
                    const number = index + 1;
                    return (
                        <NumberField isActive={activeNumber === number} key={index} num={number} onMouseEnter={(e) => e.target.focus()} onClick={() => onNumberSelect(number)}>
                            <Number>
                                {number}
                            </Number>
                            <Amount>
                                {amount}
                            </Amount>
                        </NumberField>
                    )
                })
            }
            <NumberField isActive={activeNumber === 0} num={0} onMouseEnter={(e) => e.target.focus()} onClick={() => onNumberSelect(0)}>
                            <Number>
                                &#9938;
                            </Number>
            </NumberField>
        </NumbersGrid>
    );
}

export default Numbers;
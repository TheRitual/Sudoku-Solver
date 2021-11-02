import { useSelector } from "react-redux";
import { selectNumbers } from "../../App/mainSlice";
import { Amount, Number, NumberField, NumbersGrid } from "./styled";

const Numbers = () => {
    const numbers = useSelector(selectNumbers);

    return (
        <NumbersGrid>
            {
                numbers.map((amount, index) => {
                    const number = index + 1;
                    return (
                        <NumberField key={index} onMouseEnter={(e) => e.target.focus()}>
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
        </NumbersGrid>
    );
}

export default Numbers;
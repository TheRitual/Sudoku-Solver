import { useSelector } from "react-redux";
import { selectNumbers } from "../../App/mainSlice";
import { Amount, Number, NumberField, NumbersGrid } from "./styled";

const Numbers = () => {
    const numbers = useSelector(selectNumbers);

    return (
        <NumbersGrid>
            {
                numbers.map((number, index) => {
                    return <NumberField><Number>{index}</Number> <Amount>{number}</Amount></NumberField>
                })
            }
        </NumbersGrid>
    );
}

export default Numbers;
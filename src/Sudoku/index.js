import Diagram from "./Diagram";
import Information from "./Information";
import Method from "./Method";
import Main from "./Main";
import Numbers from "./Numbers";
import Title from "./Title";
import Tools from "./Tools";
import { useSelector } from "react-redux";
import { selectMode } from "../App/mainSlice";
import { modeParams } from "../App/globalParams";

const Sudoku = () => {
    const mode = useSelector(selectMode);

    return (
        <Main>
            <Title> Sudoku Solver </Title>
            <Information />            
            <Diagram />
            {mode === modeParams.SOLVING ? <Method /> : <Numbers />}
            <Tools />
        </Main>
    );
}

export default Sudoku;
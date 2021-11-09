import Diagram from "./Diagram";
import Main from "./Main";
import Numbers from "./Numbers";
import Title from "./Title";
import { ToolsBox } from "./Tools/styled";

const Sudoku = () => {
    return (
        <Main>
            <Title> Sudoku Solver </Title>
            <Diagram />
            <Numbers />
            <ToolsBox />
        </Main>
    );
}

export default Sudoku;
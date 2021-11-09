import Diagram from "./Diagram";
import Main from "./Main";
import Numbers from "./Numbers";
import Title from "./Title";
import Tools from "./Tools";

const Sudoku = () => {
    return (
        <Main>
            <Title> Sudoku Solver </Title>
            <Diagram />
            <Numbers />
            <Tools />
        </Main>
    );
}

export default Sudoku;
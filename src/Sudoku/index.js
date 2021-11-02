import Diagram from "./Diagram";
import Main from "./Main";
import Numbers from "./Numbers";
import Title from "./Title";

const Sudoku = () => {
    return (
        <Main>
            <Title> Sudoku Solver </Title>
            <Diagram />
            <Numbers />
        </Main>
    );
}

export default Sudoku;
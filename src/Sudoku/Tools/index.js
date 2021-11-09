import { useDispatch } from "react-redux";
import { clearAll } from "../../App/mainSlice";
import { ToolsBox, ToolsButton } from "./styled";

const Tools = () => {
    const dispatch = useDispatch();
    const onClearSudoku = () => {
        dispatch(clearAll());
    }

    return (
        <ToolsBox>
            <ToolsButton onClick={onClearSudoku}>Clear Sudoku</ToolsButton>
        </ToolsBox>
    );
}

export default Tools;
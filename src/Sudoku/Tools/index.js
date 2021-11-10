import { useDispatch, useSelector } from "react-redux";
import { clearAll, selectMode, setMode } from "../../App/mainSlice";
import { ToolsBox, ToolsButton } from "./styled";

const Tools = () => {
    const dispatch = useDispatch();
    const mode = useSelector(selectMode);

    return (
        <>
            <ToolsBox>
                <ToolsButton isActive={mode === "default"} onClick={() => dispatch(setMode("default"))}>Default Numbers</ToolsButton>
                <ToolsButton isActive={mode === "custom"} onClick={() => dispatch(setMode("custom"))}>Custom Numbers</ToolsButton>
                <ToolsButton isActive={mode === "solve"} onClick={() => dispatch(setMode("solve"))} highlight>SOLVE!</ToolsButton>
            </ToolsBox>
            <ToolsBox>
                <ToolsButton onClick={() => dispatch(clearAll())}>Clear Sudoku</ToolsButton>
            </ToolsBox>
        </>
    );
}

export default Tools;
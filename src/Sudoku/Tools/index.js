import { useDispatch, useSelector } from "react-redux";
import { clearAll, clearCustom, selectMode, setMode, solve } from "../../App/mainSlice";
import { ToolsBox, ToolsButton } from "./styled";

const Tools = () => {
    const dispatch = useDispatch();
    const mode = useSelector(selectMode);

    return (
        <>
            <ToolsBox>
                <ToolsButton isActive={mode === "given"} onClick={() => dispatch(setMode("given"))}>Given Numbers</ToolsButton>
                <ToolsButton isActive={mode === "custom"} onClick={() => dispatch(setMode("custom"))}>Custom Numbers</ToolsButton>
                <ToolsButton isActive={mode === "solving"} onClick={() => dispatch(solve())} highlight>SOLVE!</ToolsButton>
            </ToolsBox>
            <ToolsBox>
                <ToolsButton onClick={() => dispatch(clearCustom())}>Clear Custom</ToolsButton>
                <ToolsButton onClick={() => dispatch(clearAll())}>Clear All</ToolsButton>
            </ToolsBox>
        </>
    );
}

export default Tools;
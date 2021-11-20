import { useDispatch, useSelector } from "react-redux";
import { clearAll, clearCustom, selectMode, setMode, solve } from "../../App/mainSlice";
import { ToolsBox, ToolsButton } from "./styled";

const Tools = () => {
    const dispatch = useDispatch();
    const mode = useSelector(selectMode);

    return (
        <>
            <ToolsBox>
                <ToolsButton isActive={mode === "given"} onClick={() => { mode !== "given" && dispatch(setMode("given")) }}>Given Numbers</ToolsButton>
                <ToolsButton isActive={mode === "custom"} onClick={() => { mode !== "custom" && dispatch(setMode("custom")) }}>Custom Numbers</ToolsButton>
                <ToolsButton isActive={mode === "solving"} onClick={() => { mode !== "solving" && dispatch(solve()) }} highlight>SOLVE!</ToolsButton>
            </ToolsBox>
            <ToolsBox>
                <ToolsButton onClick={() => dispatch(clearCustom())}>Clear Custom</ToolsButton>
                <ToolsButton onClick={() => dispatch(clearAll())}>Clear All</ToolsButton>
            </ToolsBox>
        </>
    );
}

export default Tools;
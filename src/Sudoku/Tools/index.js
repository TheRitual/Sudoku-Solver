import { useDispatch, useSelector } from "react-redux";
import { intentions, modeParams } from "../../App/globalParams";
import { clearAll, clearCustom, selectMode, setIntention, setMode, solve } from "../../App/mainSlice";
import { ToolsBox, ToolsButton } from "./styled";

const Tools = () => {
    const dispatch = useDispatch();
    const mode = useSelector(selectMode);

    return (
        <>
            <ToolsBox>
                <ToolsButton isActive={mode === modeParams.GIVEN} onClick={() => { mode !== modeParams.GIVEN && dispatch(setMode(modeParams.GIVEN)) }}>Given Numbers</ToolsButton>
                <ToolsButton isActive={mode === modeParams.CUSTOM} onClick={() => { mode !== modeParams.CUSTOM && dispatch(setMode(modeParams.CUSTOM)) }}>Custom Numbers</ToolsButton>
                <ToolsButton isActive={mode === modeParams.SOLVING} onClick={() => { mode !== modeParams.SOLVING && dispatch(setMode(modeParams.SOLVING)) }} highlight>SOLVE!</ToolsButton>
            </ToolsBox>
            <ToolsBox>
                <ToolsButton onClick={() => dispatch(setIntention(intentions.CLEAR_CUSTOM))}>Clear Custom</ToolsButton>
                <ToolsButton onClick={() => dispatch(setIntention(intentions.CLEAR_ALL))}>Clear All</ToolsButton>
            </ToolsBox>
        </>
    );
}

export default Tools;
import { useState } from "react";
import { combineArrays } from "../../utils/arrayFunctions";
import { useLocalState } from "../../utils/customHooks";
import diagramParamNames from "./diagramParamNames";

export const useDiagrams = () => {
    const [given, setGiven] = useLocalState(diagramParamNames.GIVEN, new Array(9).fill(null).map(() => new Array(9).fill(null)));
    const [custom, setCustom] = useLocalState(diagramParamNames.CUSTOM, new Array(9).fill(null).map(() => new Array(9).fill(null)));
    const combined = combineArrays(given, custom);
    const [conflicts, setConflicts] = useState(null);

    const setGivenField = () => {

    }

    const setCustomField = () => {

    }

    return [given, combined, conflicts, setGivenField, setCustomField]
}
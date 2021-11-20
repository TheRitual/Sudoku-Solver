import { useEffect, useState } from "react";

export const useLocalState = (keyName, defaultValue) => {
    const getInitialValue = (keyName) => {
        const localStorageValue = localStorage.getItem(keyName);
        const result = localStorageValue ?  defaultValue : JSON.parse(localStorageValue);
        return result;
    }

    const [localState, setLocalState] = useState(getInitialValue(keyName));

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(localState));
    }, [localState, keyName]);

    return [localState, setLocalState];
}
import {useState} from "react";

const useToggle = (defaultState) => {
    const [value, setValue] = useState(defaultState);

    const toggleValue = (value) => {
        setValue(currentValue => typeof value === "boolean" ? value : !currentValue);
    }

    return [value, toggleValue];
}

export default useToggle;
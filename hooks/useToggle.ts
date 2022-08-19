import {useState} from "react";

export type Toggler = (newValue?: boolean) => void;

const useToggle = (defaultState?: boolean): [boolean, Toggler] => {
    const [value, setValue] = useState(defaultState || false);

    const toggleValue = (newValue?: boolean) => {
        setValue(prevValue => newValue == undefined ? !prevValue : newValue);
    }

    return [value, toggleValue];
}

export default useToggle;
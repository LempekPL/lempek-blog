import {useEffect, useState} from "react";

const useIcon = (defaultState: JSX.Element): JSX.Element => {
    const [value, setValue] = useState<JSX.Element | null>(null);

    useEffect(() => {
        return setValue(defaultState);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return <JSX.Element> value;
}

export default useIcon;
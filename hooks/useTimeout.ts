import {useCallback, useEffect, useRef} from "react";

const useTimeout = (callback: Function, delay: number | undefined) => {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef<NodeJS.Timeout>(null);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        // @ts-ignore
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return { reset, clear};
};

export default useTimeout;
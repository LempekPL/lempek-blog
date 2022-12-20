import type {DependencyList} from "react";

const useTimeout = require("./useTimeout");
const {useEffect} = require("react");

const useDebounce = (callback: Function, delay: number | undefined, deps: DependencyList) => {
    const {reset, clear} = useTimeout(callback, delay);
    useEffect(reset, [...deps, reset]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(clear, []);
};
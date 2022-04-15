const useTimeout = require("./useTimeout");
const {useEffect} = require("react");

const useDebounce = (callback, delay, deps) => {
  const {reset, clear} = useTimeout(callback, delay);
  useEffect(reset, [...deps, reset]);
  useEffect(clear, []);
};
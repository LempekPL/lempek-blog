import {Ref, useEffect} from "react";

const useOutside = (ref: Ref<any>, fun: Function) => {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: Event) {
            console.log(ref)
            if (!ref?.current?.contains(event.target)) {
                fun();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [fun, ref]);
}

export default useOutside;
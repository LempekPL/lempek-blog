import {TSpan} from "../components/useful-components.style";
import useTranslation from "next-translate/useTranslation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default () => {
    const {t, lang} = useTranslation("common");
    const lem = t("lempek");

    return <>
        <p><TSpan>AA</TSpan></p>
        <button>{lem}</button>
    </>
}
import {TSpan} from "../components/useful-components.style";
import useTranslation from "next-translate/useTranslation";

const Index = () => {
    const {t} = useTranslation("common");
    const lem = t("lempek");

    return <>
        <p><TSpan>AA</TSpan></p>
        <button>{lem}</button>
    </>
}
export default Index;
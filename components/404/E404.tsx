import {E404Box, E404Margins, E404TextBox} from "../../styles/E404/e404";
import useTranslation from "next-translate/useTranslation";

const E404 = () => {
    const {t} = useTranslation("common");

    return <>
        <E404Margins>
            <E404Box>
                <E404TextBox>
                    <p>{t("error")} 404<br/>{t("notFound")}</p>
                </E404TextBox>
            </E404Box>
        </E404Margins>
    </>
}

export default E404;
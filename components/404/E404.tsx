import {E404TextBox} from "../../styles/E404/e404";
import useTranslation from "next-translate/useTranslation";
import {MainBox, MainLayout} from "../../styles/universal";

const E404 = () => {
    const {t} = useTranslation("common");

    return <>
        <MainLayout>
            <MainBox>
                <E404TextBox>
                    <p>{t("error")} 404<br/>{t("notFound")}</p>
                </E404TextBox>
            </MainBox>
        </MainLayout>
    </>
}

export default E404;
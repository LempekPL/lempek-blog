import {E404TextBox} from "../styles/e404";
import useTranslation from "next-translate/useTranslation";
import {MainBox, MainLayout} from "../styles/universal";

export const E404Component = () => {
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
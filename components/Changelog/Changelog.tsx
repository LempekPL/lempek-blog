import useTranslation from "next-translate/useTranslation";
import {MainBox, MainLayout} from "../../styles/universal";
import {ChangeBox, TitleName, ChangeName, ChangesList, Changes} from "../../styles/Changelog/changelog";

interface ChangeType {
    _version_: string
    _date_: string
    list: string[]
}

const Changelog = () => {
    const {t: c} = useTranslation("common");
    const {t} = useTranslation("changelog");
    const months_query = {
        jan: c("months.january"),
        feb: c("months.february"),
        mar: c("months.march"),
        apr: c("months.april"),
        may: c("months.may"),
        jun: c("months.june"),
        jul: c("months.july"),
        aug: c("months.august"),
        sep: c("months.september"),
        oct: c("months.october"),
        nov: c("months.november"),
        dec: c("months.december")
    }
    const changes: ChangeType[] = t("changes", months_query, {returnObjects: true});
    const changes_list = [];
    for (let i = 0; i < changes.length; i++) {
        const changes_descriptions_list = [];
        for (let i = 0; i < changes[i].list.length; i++) {
            changes_descriptions_list.push(
                <Changes>
                    changes[i].list[i]
                </Changes>
            )
        }
        changes_list.push(
            <ChangeBox key={changes[i]._version_} id={changes[i]._version_}>
                <ChangeName>
                    {`V${changes[i]._version_} - ${changes[i]._date_}`}
                </ChangeName>
                <ChangesList>
                    {changes[i].list.map(v => <Changes key={v+i}>{v}</Changes>)}
                </ChangesList>
            </ChangeBox>
        );
    }

    return <>
        <MainLayout>
            <MainBox>
                <TitleName>
                    LempekWebsite changelog
                </TitleName>
                {changes_list}
            </MainBox>
        </MainLayout>
    </>
}

export default Changelog;
import {SearchBox, SearchFilterBox, SearchIcon, SearchInput} from "../../styles/Blog/searchBox";
import useIcon from "../../hooks/useIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";

const SearchBar = () => {
    const {t} = useTranslation("blog")

    return <SearchBox>
        <SearchIcon>
            {useIcon(<FontAwesomeIcon icon={["fas", "magnifying-glass"]}/>)}
        </SearchIcon>
        <SearchInput placeholder={t("search")+"..."}/>
        <SearchFilterBox>

        </SearchFilterBox>
    </SearchBox>
}

export default SearchBar;
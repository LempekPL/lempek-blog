import {SearchBox, SearchFilterBox, SearchIcon, SearchInput} from "../../styles/Blog/searchBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";

const SearchBar = ({searchPosts}: {searchPosts: Function}) => {
    const {t} = useTranslation("blog")

    return <SearchBox>
        <SearchIcon><FontAwesomeIcon icon={["fas", "magnifying-glass"]}/></SearchIcon>
        <SearchInput placeholder={t("search")+"..."} onInput={(e) => searchPosts(e.currentTarget.value)}/>
        <SearchFilterBox>

        </SearchFilterBox>
    </SearchBox>
}

export default SearchBar;
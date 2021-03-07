import Button from "../atoms/Button";
import SearchBar from "../atoms/searchBar";
import TagSearch from "../atoms/tagSearch";
import { SectionToSearch } from "../../style/index.js";
import { openModal } from "../../store/actions";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(openModal(true));
  };
  return (
    <SectionToSearch>
      <div className="search_group">
        <SearchBar />
        <TagSearch />
      </div>
      <div>
        <Button text="+ ADD" which="neutral" state={() => handleModal(true)} />
      </div>
    </SectionToSearch>
  );
};

export default Search;

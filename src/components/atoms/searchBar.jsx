import { thunkSitesList, thunkSitesByTag } from "../../store/thunk";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const TagValue = useSelector((state) => state.tags);
  const dispatch = useDispatch();
  const handleChange = (data) => {
    TagValue ? dispatch(thunkSitesByTag(data)) : dispatch(thunkSitesList(data));
  };
  return (
    <>
      <img
        src="./img/Icon-Search-2px.svg"
        alt="lupa"
        height="16px"
        className="icon_absolute"
      />
      <input
        type="text"
        placeholder="search"
        className="search"
        onChange={(ev) => handleChange(ev.target.value)}
      />
    </>
  );
};

export default SearchBar;

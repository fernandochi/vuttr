import { tags } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const TagSearch = () => {
  const dispatch = useDispatch();
  let tagsValue = useSelector((state) => state.tags);

  return (
    <div>
      <input
        type="checkbox"
        id="tag"
        onChange={() => {
          dispatch(tags(!tagsValue));
        }}
      />

      <label htmlFor="tag">search in tag only </label>
    </div>
  );
};

export default TagSearch;

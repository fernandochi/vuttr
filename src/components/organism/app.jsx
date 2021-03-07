import { useEffect } from "react";
import { thunkSitesList } from "../../store/thunk";
import { useSelector, useDispatch } from "react-redux";
import Header from "../molecules/header.jsx";
import Search from "../molecules/search.jsx";
import Main from "../molecules/main.jsx";
import AddNewTool from "../atoms/modal.jsx";

const Organism = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkSitesList());
  }, [dispatch]);

  const sites = useSelector((state) => state.sites);

  return (
    <>
      <Header />
      <Search />
      <Main sites={sites} />
      <AddNewTool />
    </>
  );
};

export default Organism;

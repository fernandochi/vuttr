import axios from "axios";
import { toolSites } from "./actions";

export const thunkSitesList = (name = "") => (dispatch, _getState) => {
  axios
    .get(`http://localhost:3000/tools?q=${name}`)
    .then((res) => {
      dispatch(toolSites(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
export const thunkSitesByTag = (name = "") => (dispatch, _getState) => {
  axios
    .get(`http://localhost:3000/tools?tags_like=${name}`)
    .then((res) => {
      dispatch(toolSites(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

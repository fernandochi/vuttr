import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { ModalShowing, cardsSite, tagsSearch } from "./reducer";

const reducer = combineReducers({
  modalState: ModalShowing,
  sites: cardsSite,
  tags: tagsSearch,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

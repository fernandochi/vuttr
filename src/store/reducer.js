export const ModalShowing = (state = false, action) => {
  switch (action.type) {
    case "@open":
      return true;
    case "@close":
      return false;
    default:
      return state;
  }
};

export const cardsSite = (state = [], action) => {
  switch (action.type) {
    case "@tools":
      const { list } = action;
      return list;

    default:
      return state;
  }
};

export const tagsSearch = (state = false, action) => {
  switch (action.type) {
    case "@tags":
      const { bool } = action;
      return bool;

    default:
      return state;
  }
};

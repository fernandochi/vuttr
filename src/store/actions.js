export const openModal = (bool) => ({
  type: "@open",
  bool,
});

export const closeModal = (bool) => ({
  type: "@close",
  bool,
});

export const toolSites = (list) => ({
  type: "@tools",
  list,
});

export const tags = (bool) => ({
  type: "@tags",
  bool,
});

export const sorting = isAscending => {
  switch (isAscending) {
    case true:
      return (a, b) => (a.task > b.task ? 1 : -1);
    case false:
      return (a, b) => (a.task < b.task ? 1 : -1);
  }
};

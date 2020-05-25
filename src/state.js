export const loadState = (item) => {
  const serializedState = localStorage.getItem(item);
  if (!serializedState) {
    return;
  } else {
    return JSON.parse(serializedState);
  }
};

export const saveState = (item, state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(item, serializedState)
}
export const LoadState = (item) => {
  try {
    const localStorageData = localStorage.getItem(item);
    if (localStorageData === null) {
      return {};
    }
    return JSON.parse(localStorageData);
  } catch (err) {
    return {};
  }
};

export const SaveState = (name, state) => {
  debugger;
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(name, serializedState);
  } catch (err) {}
};

export const ClearState = () => {
  localStorage.clear();
};

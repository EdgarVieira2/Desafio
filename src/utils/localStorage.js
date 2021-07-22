export function getGameList() {
    return getItem('gamesList', true);
  }
  
  export function saveLocalGamesList(gamesList) {
    setItem('gamesList', gamesList, true);
  }
  
  function removeItem(item) {
    localStorage.removeItem(item);
  }
  
  function isValidStorageDate(item) {
    if (item && item.storageDate) {
      const diff = new Date() - new Date(item.storageDate);
      if (diff > (1000 * 60 * 60 * 12)) {
        return false;
      }
    }
    return true;
  }
  
  function getItem(item, isObject) {
    const foundItem = localStorage.getItem(item);
    const newFoundItem = isObject ? JSON.parse(foundItem) : foundItem;
    if (!isValidStorageDate(newFoundItem)) {
      removeItem(item);
      return undefined;
    }
    return newFoundItem;
  }
  
  function setItem(item, value, isObject) {
    let newValue = value;
    if (isObject) {
      newValue = newValue || {};
      newValue.storageDate = new Date();
    }
    localStorage.setItem(item, isObject ? JSON.stringify(newValue) : newValue);
  }
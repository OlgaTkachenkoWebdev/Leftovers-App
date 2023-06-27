const setArrayLocalStorage = function(name, array) {
  localStorage.setItem(name, JSON.stringify(array));
};

export default setArrayLocalStorage;
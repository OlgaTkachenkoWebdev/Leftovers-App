//gets array formatted as a string of items stored in local storage

const getArrayFromLocalStorage = function (storageName) {
  let elements = [];
  const storedElements = localStorage.getItem(storageName);
  if (storedElements) {
    const parsedElements = JSON.parse(storedElements);
    elements.push(parsedElements);
  }
  return elements.join();
};

export default getArrayFromLocalStorage;
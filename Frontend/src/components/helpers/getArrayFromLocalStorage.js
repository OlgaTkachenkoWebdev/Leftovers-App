//gets array formatted as a string of items stored in local storage

const getArrayFromLocalStorage = function (storageName) {
  const storedElements = localStorage.getItem(storageName);
  console.log("storedElements", storedElements);
  if (storedElements) {
    const parsedElements = JSON.parse(storedElements);
    console.log("parsedElements", parsedElements);
    return parsedElements;
  } else {
    return [];
  }
};

export default getArrayFromLocalStorage;
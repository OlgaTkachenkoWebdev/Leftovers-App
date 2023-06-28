import ListElement from "../ListElement";
// creates a list of items stored in Local Storage
const listArrayFromLocalStorage = function (storageName, elementId) {
  let elements = [];
  const storedElements = localStorage.getItem(storageName);
  if (storedElements) {
    const parsedElements = JSON.parse(storedElements);
    for (const el of parsedElements) {
      elements.push(
        <div>
          <ListElement key={el} leftover={el} id={elementId} />
        </div>);
    }
  }
  return elements;
};

export default listArrayFromLocalStorage;
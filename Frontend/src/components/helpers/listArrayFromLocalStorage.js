import ListElement from "../ListElement";

const listArrayFromLocalStorage = function (name, elementId) {
  let elements = [];
  const storedElements = localStorage.getItem(name);
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
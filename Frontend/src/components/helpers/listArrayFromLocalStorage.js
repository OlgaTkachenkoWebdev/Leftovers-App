import Element from "./LeftoverElement";
const listArrayFromLocalStorage = function (name, elementId) {
  let elements = [];
  const storedElements = localStorage.getItem(name);
  if (storedElements) {
    const parsedElements = JSON.parse(storedElements);
    for (const el of parsedElements) {
      elements.push(
        <div>
          <Element key={item} leftover={el} id={elementId} />
        </div>);
    }
  }
  return elements;
};

exports.listArrayFromLocalStorage = listArrayFromLocalStorage;
const addToArrayLocalStorage = function(name, item) {
  let addedItem = localStorage.getItem(name); 
  addedItem = addedItem ? JSON.parse(addedItem) : [];
  addedItem.push(item);
  localStorage.setItem(name, JSON.stringify(addedItem));
};

exports.addToArrayLocalStorage = addToArrayLocalStorage;
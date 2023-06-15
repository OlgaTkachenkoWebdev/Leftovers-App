import ListGroup from "react-bootstrap/ListGroup";
import ShoppingListItem from "./ShoppingListItem";

function ShoppingListComp() {
  const shoppingList = JSON.parse(localStorage.getItem("shoppingList"));

  return (
    <ListGroup variant="flush">
      <div>
        {shoppingList && shoppingList.map((name) => {
          return <ShoppingListItem name={name} />;
        })}
      </div>
    </ListGroup>
  );
}

export default ShoppingListComp;
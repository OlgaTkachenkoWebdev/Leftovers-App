import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ShoppingListItem.css";

function ShoppingListItem(props) {

  return (
    <div>
      <ListGroup.Item>
        <div className='checkbox-item-div'>
          <input name='check' id='check' type="checkbox" />
          <label for="check" id="shopping-item">{props.name}</label>
        </div >
        <div className='icon-div'>
          <a><i className="fa-solid fa-x"></i></a>
        </div>
      </ListGroup.Item>
    </div>
  );
}

export default ShoppingListItem;
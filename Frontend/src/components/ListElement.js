import { useContext } from "react";
import "./ListElement.css";

import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import { leftoversContext } from "../providers/LeftoversProvider";

function ListElement(props) {
  const { deleteLeftover } = useContext(leftoversContext);

  if (props.leftover.length) {
    return (
      <div>
        <div className="leftoverListItem" id={props.id} key={props.key}>
          <div>{props.leftover}</div>
          <Icon path={mdiClose} size={1} className="delete" onClick={() => deleteLeftover(props.leftover)} />
        </div>
      </div>
    );
  }
}

export default ListElement;
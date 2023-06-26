import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import { useContext } from "react";
import { leftoversContext } from "../providers/LeftoversProvider";

function Element(props) {
  const { deleteLeftover } = useContext(leftoversContext);

  return (
    <div>
      {props.leftover && props.leftover.map((name) => {
        return (
          <div className="leftoverListItem">
            <div>{name}</div>
            <Icon path={mdiClose} size={1.2} className="delete" onClick={() => deleteLeftover(props.leftover)} />
          </div>);
      })}
    </div>
  );
}

export default Element;
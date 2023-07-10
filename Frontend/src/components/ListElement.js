import { useContext } from "react";
import styled from "styled-components";
import "./ListElement.css";

import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import { leftoversContext } from "../providers/LeftoversProvider";

const CrossIcon = styled(Icon)`
width: 3.3rem;
height: 2.3rem;
padding-left: 0.5rem;
display: flex
`;

function ListElement(props) {
  const { deleteLeftover } = useContext(leftoversContext);

  if (props.leftover.length) {
    return (
      <div>
        <div className="leftoverListItem" id={props.id} key={props.key}>
          <div>{props.leftover}</div>
          <CrossIcon path={mdiClose} className="delete" onClick={() => deleteLeftover(props.leftover)} />
        </div>
      </div>
    );
  }
}

export default ListElement;
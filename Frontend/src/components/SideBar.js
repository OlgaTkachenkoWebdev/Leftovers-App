import React, { useState, useContext } from "react";
import "./SideBar.css";

import Collapse from "react-bootstrap/Collapse";

import Icon from "@mdi/react";
import { mdiPlus, mdiCheck } from "@mdi/js";

import LeftoverElement from "./LeftoverElement";

import { leftoversContext } from "../providers/LeftoversProvider";

function SideBar() {
  const [open, setOpen] = useState(false);
  const [leftover, setLeftover] = useState("");
  const { addLeftover, leftovers } = useContext(leftoversContext);

  const onSubmit = function (event) {
    event.preventDefault();

    let existing = localStorage.getItem("leftovers");
    existing = existing ? JSON.parse(existing) : {};
    localStorage.setItem("leftovers", JSON.stringify(existing));
  };

  const listLeftovers = function () {
    let leftoverElements = [];
    const storedLeftovers = localStorage.getItem("leftovers");
    if (storedLeftovers) {
      leftoverElements.push(
        <div>
          <LeftoverElement key={leftover} leftover={Object.keys(JSON.parse(storedLeftovers))} />
        </div>);
    }
    return leftoverElements;
  };

  return (
    <div className="sideBar col-3">
      <div className="myLeftovers element">
        <span className="dot"></span>
        <span className="category">My Leftovers</span>
        <Icon path={mdiPlus} size={1.3} className="plusSign"
          role="button"
          onClick={() => setOpen(!open)}
          aria-controls="collapse-form"
          aria-expanded={open} />
      </div>
      <Collapse in={open}>
        <div className="newItem" id="collapse-form">
          <form autoComplete="off" onSubmit={onSubmit}>
            <input
              className="inputLeftover"
              placeholder="Add new leftover"
              name="name"
              type="text"
              value={leftover}
              onChange={event => setLeftover(event.target.value)}
            />
          </form>
          <Icon path={mdiCheck} size={1} onClick={onSubmit} />
        </div>
      </Collapse>
      <ul className="leftoversList">
        {listLeftovers()}
      </ul>
    </div>
  );
}

export default SideBar;
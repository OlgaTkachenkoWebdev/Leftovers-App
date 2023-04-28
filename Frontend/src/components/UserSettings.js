import React, { useContext, useState } from "react";
import "./UserSettings.css";
import Dropdown from "react-bootstrap/Dropdown";
import Icon from "@mdi/react";
import { mdiAccountCog } from "@mdi/js";
import { Link } from "react-router-dom";

const UserToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div>
    <Icon
      path={mdiAccountCog}
      size={1.5}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
    {children}
  </div>
));

const UserMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="userMenu">
          <Link to="/login" >
            Sign Out
          </Link>
        </ul>
        <ul className="list-unsty">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

function UserSettings() {
  return (
    <Dropdown>
      <Dropdown.Toggle as={UserToggle} className="dropdown-settings" />

      <Dropdown.Menu as={UserMenu} className="settingsForm"></Dropdown.Menu>
    </Dropdown>
  );
}

export default UserSettings;

import React, { useState, useContext } from "react";
import "./Filter.css";

import Dropdown from "react-bootstrap/Dropdown";
import Icon from "@mdi/react";
import { mdiFilterOutline } from "@mdi/js";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { filtersContext } from "../providers/FiltersProvider";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div>
    <Icon className="filterIcon" path={mdiFilterOutline} size={1.5}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
    {children}
  </div>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");
    const [diet, setDiet] = useState("");
    const [mealtype, setMealtype] = useState("");
    const [intolerance, setIntolerances] = useState("");
    const { addDiet, deleteDiet, addMealtype, deleteMealtype, addIntolerances, deleteIntolerances, diets, mealtypes, intolerances } = useContext(filtersContext);

    function handleDietClick(event) {
      if (Object.values(diets) > 0 && Object.values(diets).icludes(event.target.value)) {
        deleteDiet(event.target.value);
        setDiet("");
      } else {
        addDiet(event.target.value);
        setDiet(event.target.value);
      }
    }

    function handleMealClick(event) {
      if (Object.values(mealtypes) > 0 && Object.values(mealtypes).icludes(event.target.value)) {
        deleteMealtype(event.target.value);
        setMealtype("");
      } else {
        addMealtype(event.target.value);
        setMealtype(event.target.value);
      }
    }

    function handleIntoleranceClick(event) {
      if (Object.values(intolerances) > 0 && Object.values(intolerances).icludes(event.target.value)) {
        deleteIntolerances(event.target.value);
        setIntolerances("");
      } else {
        addIntolerances(event.target.value);
        setIntolerances(event.target.value);
      }
    }

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form>
          <Container>
            <Row>
              <Col xs="auto">
                <div>Diet:</div>
                <Form.Check type={"checkbox"} label={"Gluten Free"} value="gluten free" onClick={handleDietClick} />
                <Form.Check type={"checkbox"} label={"Vegetarian"} value="vegetarian" onClick={handleDietClick} />
                <Form.Check type={"checkbox"} label={"Vegan"} value="vegan" onClick={handleDietClick} />
                <Form.Check type={"checkbox"} label={"Paleo"} value="paleo" onClick={handleDietClick} />
                <Form.Check type={"checkbox"} label={"Ketogenic"} value="ketogenic" onClick={handleDietClick} />
              </Col>
              <Col xs="auto">
                <div>Mealtype:</div>
                <Form.Check type={"checkbox"} label={"Breakfast"} value="breakfast" onClick={handleMealClick} />
                <Form.Check type={"checkbox"} label={"Main Course"} value="main course" onClick={handleMealClick} />
                <Form.Check type={"checkbox"} label={"Side Dish"} value="side dish" onClick={handleMealClick} />
                <Form.Check type={"checkbox"} label={"Snack"} value="snack" onClick={handleMealClick} />
                <Form.Check type={"checkbox"} label={"Drink"} value="drink" onClick={handleMealClick} />
              </Col>
              <Col xs="auto">
                <div>Intolerances:</div>
                <Form.Check type={"checkbox"} label={"Gluten"} value="gluten" onClick={handleIntoleranceClick} />
                <Form.Check type={"checkbox"} label={"Dairy"} value="dairy" onClick={handleIntoleranceClick} />
                <Form.Check type={"checkbox"} label={"Peanut"} value="peanut" onClick={handleIntoleranceClick} />
                <Form.Check type={"checkbox"} label={"Seafood"} value="seafood" onClick={handleIntoleranceClick} />
              </Col>
            </Row>
          </Container>
        </Form>
        <ul className="list-unsty">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

function Filter() {
  return (
    <Dropdown align={"end"}>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />

      <Dropdown.Menu align="end" as={CustomMenu} className='filterForm'>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Filter;
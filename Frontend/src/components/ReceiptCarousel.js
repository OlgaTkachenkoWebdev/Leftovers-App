import React, { useState, useRef, useContext } from "react";
import "./ReceiptCarousel.css";

import Icon from "@mdi/react";
import { mdiHeartOutline, mdiClose, mdiCircleSmall } from "@mdi/js";
import Filter from "./Filter";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import RecipesAlert from "./RecipesAlert";

import { userRecipesContext } from "../providers/UsersRecipesProvider";

function ReceiptCarousel(props) {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const { addUserRecipes } = useContext(userRecipesContext);

  const currentRecipe = props.recipes[index];

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onRejectClick = () => {
    addUserRecipes({ ...currentRecipe, "accepted": false });
    ref.current.next();
  };

  const onLikeClick = () => {
    addUserRecipes({ ...currentRecipe, "accepted": true });
    ref.current.next();
  };

  let recipesElements = [];

  for (const recipe of props.recipes) {
    recipesElements.push(
      <Carousel.Item key={recipe.id}>
        <img src={recipe.image} className="mainPicture" width="200" />
        <Carousel.Caption>
          <h3> {recipe.title} </h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  function SpecialTags() {
    if (props.recipes.length === 0) {
      return <h4> </h4>;
    }
    const loadedRecipes = props.recipes[index];

    let tags = [];
    if (loadedRecipes.dairyFree) {
      tags.push("Dairy Free 🐮");
    } if (loadedRecipes.glutenFree) {
      tags.push("Gluten Free 🍞");
    } if (loadedRecipes.vegan) {
      tags.push("Vegan 🥬");
    } if (loadedRecipes.vegetarian) {
      tags.push("Vegetarian 🥗");
    }
    return tags.map(tag => <h5> {tag} </h5>);
  }

  function UsedIngredientsTitle() {
    if (props.recipes[index].usedIngredients.length === 0) {
      return <h4> </h4>;
    }
    if (props.recipes[index].usedIngredients.length > 0) {
      return <h5><b>Used Leftovers</b></h5>;
    }
  }

  function UsedIngredients() {
    if (props.recipes[index].usedIngredients.length === 0) {
      return <h4> </h4>;
    }
    const usedIngredients = props.recipes[index].usedIngredients;

    return (
      usedIngredients.map(usedI =>
        <div> <Icon path={mdiCircleSmall} size={1} /> {usedI.name} ( {usedI.amount} {usedI.unit} )</div>
      ));
  };

  function MissedIngredientsTitle() {
    if (props.recipes[index].missedIngredients.length === 0) {
      return <h4> </h4>;
    }
    if (props.recipes[index].missedIngredients.length > 0) {
      return <h5><b>Missing Ingredients</b></h5>;
    }
  }

  function MissedIngredients() {
    if (props.recipes[index].missedIngredients.length === 0) {
      return <h4> </h4>;
    }

    const missedIngredients = props.recipes[index].missedIngredients;

    return (
      missedIngredients.map(missedI =>
        <div> <Icon path={mdiCircleSmall} size={1} /> {missedI.name} ( {missedI.amount} {missedI.unit} )</div>
      ));
  };

  return (
    <Container>
      {props.recipes[index] == undefined && < RecipesAlert />}
      {props.recipes[index] && props.recipes[index] !== {} && <Row className="mainRecipeInfo">
        <Col xs={8}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
            controls={false}
            ref={ref}
            interval={null}
          >
            {recipesElements}
            <Filter />
          </Carousel>
          {props.recipes[index] && <div className="buttons">
            <Col xs="auto"><Button className="reject btn" onClick={onRejectClick}><Icon path={mdiClose} size={1.5} /></Button></Col>
            <Col xs="auto"><Button className="accept btn" onClick={onLikeClick}><Icon path={mdiHeartOutline} size={1.3} /></Button></Col>
          </div>}
        </Col>
        <Col className="ingredients" xs={3}>
          {props.recipes[index] &&
            <>
              <h4> Cooking time: {props.recipes[index]["readyInMinutes"]} minutes</h4>
              <hr className="dotted"></hr>
            </>
          }
          {props.recipes[index] && <div className="tags"> < SpecialTags /> </div>}
          {props.recipes[index] && (props.recipes[index].dairyFree || props.recipes[index].glutenFree || props.recipes[index].vegan || props.recipes[index].vegetarian) ? <hr className="dotted"></hr> : <div></div>}
          {props.recipes[index] && < UsedIngredientsTitle />}
          {props.recipes[index] && < UsedIngredients />}
          {props.recipes[index] && props.recipes[index].usedIngredients.length > 0 ? <hr className="dotted"></hr> : <div></div>}
          {props.recipes[index] && < MissedIngredientsTitle />}
          {props.recipes[index] && < MissedIngredients />}
        </Col>
      </Row>}
    </Container>
  );
}

export default ReceiptCarousel;
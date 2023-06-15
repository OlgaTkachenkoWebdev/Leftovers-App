import "./styles/RecipeHistory.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useContext, useEffect } from "react";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import MyRecipesElement from "../components/MyRecipesElement";
import { userRecipesContext } from "../providers/UsersRecipesProvider";


function RecipeHistory() {
  const { userRecipes, getSavedRecipes } = useContext(userRecipesContext);

  let recipesElements = [];
  for (let recipeElement in userRecipes) {
    const recipe = userRecipes[recipeElement];
    recipesElements.push(<MyRecipesElement key={recipe.id} recipe={recipe} />);
  }

  useEffect(() => {
    getSavedRecipes();
  }, []);

  return (
    <div className="recipe-history-div">
      <NavBar />
      <main className="main">
        <SideBar />
        <section className="content col-9">
          <Row>
            <Col>
              {recipesElements}
            </Col>
          </Row>
        </section>
      </main>
    </div>
  );
}

export default RecipeHistory;
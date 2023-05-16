import "./MyRecipesElement.css";
import { useContext, useEffect } from 'react';
import { userRecipesContext } from "../providers/UsersRecipesProvider";
import { ingredientsContext } from "../providers/IngredientsProvider";
import PropTypes from 'prop-types'; 

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import Icon from '@mdi/react';
import { mdiClose, mdiCircleSmall } from '@mdi/js';

function MyRecipesElement(props) {
  const myRecipe = props.recipe;
  const { deleteUserRecipes } = useContext(userRecipesContext);
  const { getIngredients, ingredients } = useContext(ingredientsContext);

  let ingredientElements = [];
  for (const ingredientElement in ingredients) {
    const ingredient = ingredients[ingredientElement];
    ingredientElements.push(<div><Icon path={mdiCircleSmall} size={1} /> {ingredient.name} ( {ingredient.amount} {ingredient.unit} )</div>);
  }
  let instructionsElements = [];

  if (myRecipe.instructions && myRecipe.instructions > 0) {
    const instructionsSteps = myRecipe.instructions.split('   ');
    for (let i = 1; i < instructionsSteps.length; i += 2) {
      instructionsElements.push(
        <div> <b>Step {instructionsSteps[i]}</b>: {instructionsSteps[i + 1]} </div>)
    }
  }


  useEffect(() => {
    getIngredients(myRecipe.id)
  }, [])
  const recipe = [{
    apiId: 634141, title: "Banana Oatmeal Breakfast Muffins", readyInMinutes: 45, image: "https://spoonacular.com/recipeImages/634141-312x231.jpg", missedIngredients: [{ "name": "oats", "amount": 2, "unit": "cups" }, { "name": "honey", "amount": 0.33333334, "unit": "cup" }, { "name": "bananas", "amount": 2, "unit": "" }, { "name": "almond milk", "amount": 2, "unit": "cups" }, { "name": "egg whites", "amount": 0.5, "unit": "cup" }, { "name": "protein powder", "amount": 2, "unit": "scoops" }, { "name": "baking powder", "amount": 1, "unit": "tsp" }, { "name": "cinnamon", "amount": 2, "unit": "tsp" }, { "name": "vanilla extract", "amount": 1, "unit": "tsp" }, { "name": "walnuts", "amount": 0.25, "unit": "cup" }, { "name": "raisins", "amount": 0.5, "unit": "cup" }], usedIngredients: [{ "name": "oats", "amount": 2, "unit": "cups" }], unusedIngredients: [], instructions: ["Preheat the oven to 400 degrees F (205 degrees C). Line a 12-cup muffin tin with paper liners.", "Combine flour, oats, sugar, baking powder, soda, and salt in a medium bowl; set aside.", "Beat egg lightly in a large bowl. Whisk in milk, oil, and vanilla.", "Stir in mashed bananas. Add the flour mixture and stir until just combined. Spoon batter into the prepared muffin cups, filling each 3/4 full.", "Bake in the preheated oven until tops spring back when lightly pressed, 18 to 20 minutes."
    ]
  }]; 
  function RecipieToggle() {
    return (
      <Row className='recipeElement' onClick={useAccordionButton()}>
        <Col xs="auto"><img src={myRecipe.image} className="smallPhoto" /></Col>
        <Col xs={8}><h3 className="recipeName">{myRecipe.title}</h3></Col>
      </Row>
    );
  }
  
  return (
   
    <Accordion defaultActiveKey="0">
      <div className="recipeContainer">
        <RecipieToggle />
        <Accordion.Collapse >
          <Container className="instructions" >
            <Row>
              <Col>
              {recipe && <div className="collapsed-container">
           
              {recipe[0].missedIngredients[0] ? <ol><h6> Missing Ingredients</h6> {recipe[0].missedIngredients.map((ingredient) => (
                <li> 
                  <div className="show-on-hover">
                    <a className="cart-link" >
                      <i id="cart-icon"className="fa-solid fa-cart-shopping">
                        </i> 
                        </a>
                         <span className="ingredient">  {ingredient.name}  </span> 
                         </div>
                         </li> 
              ))} </ol> : <span/>}
              {recipe[0].usedIngredients[0]? <ol><h6> Used Ingredients</h6> {recipe[0].usedIngredients.map((ingredient) => (
                <li> <div className="show-on-hover"><a className="cart-link" ><i id="cart-icon"className="fa-solid fa-cart-shopping"></i> </a> <span className="ingredient">  {ingredient.name}  </span> </div></li> 
              ))} </ol> : <span/>}
              {instructionsElements}
              </div>
              }
              </Col>
            </Row>
          </Container>
        </Accordion.Collapse>
      </div>
    </Accordion>
    
  )
}

// MyRecipesElement.propTypes = {
//   myRecipe: PropTypes.object.isRequired
// };

export default MyRecipesElement;
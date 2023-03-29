const express = require("express");
const Recipe = require("../models/recipes");
const Ingredient = require("../models/ingredients");
const router = express.Router();

const formatInstructions = require("./helpers/formatInstructions");

const spoonacularApi = require("./helpers/spoonacularAPI");

router.get("/recipes", (req, res) => {
  const { ingredients, diet, mealtype, intolerances } = req.query;

  spoonacularApi
    .newRecipes(ingredients, diet, mealtype, intolerances)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

router.post("/savedrecipes", (req, res) => {
  const {
    apiId,
    title,
    readyInMinutes,
    image,
    vegetarian,
    vegan,
    glutenFree,
    dairyFree,
    missedIngredients,
    usedIngredients,
    unusedIngredients,
    instructions,
  } = req.body;

  const instructionsString = formatInstructions.formatInstructions(instructions);

  Recipe.create({
    apiId,
    title,
    readyInMinutes,
    image,
    vegetarian,
    vegan,
    glutenFree,
    dairyFree,
    instructions: instructionsString
  })
    .then(() => {
      return Ingredient.bulkCreate(missedIngredients.concat(usedIngredients, unusedIngredients))      
    })
    .then(() => {
      res.json("done");
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
})

router.get("/savedrecipes", (req, res) => {
  Recipe.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.send(e);
    })
})

router.get("/ingredients", (req, res) => {
  const {
    id
  } = req.query;

  console.log(req.query)

  Ingredient.findAll({
    where: {
      "recipe_id": id,
    }
  })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.send(e);
    })
})

router.delete("/savedrecipes/:id", (req, res) => {
  const {
    id
  } = req.params;

  console.log(req.params)
  console.log(id)

  Recipe.destroy({
    where: {
      "id": id,
    }
  })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.send(e);
    })
})

module.exports = router;

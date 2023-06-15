import { createContext, useState } from "react";
import axios from "axios";

export const userRecipesContext = createContext();


export default function UserRecipesProvider(props) {
  const [userRecipes, setUserRecipes] = useState([]);

  function addUserRecipes(params) {
    return axios.post("/savedrecipes", params)
      .then((all) => {
        setUserRecipes(() => all.data);
      });
  };

  function getSavedRecipes() {
    return axios.get("/savedrecipes")
      .then((all) => {
        console.log("all", all);
        const data = all.data;
        console.log("data", data);
        const recipes = data.recipes;
        const filterRecipes = function (recipes) {
          let likedrecipe = [];
          for (const res of recipes) {
            if (res.accepted) {
              likedrecipe.push(res);
            }
          }
          return likedrecipe;
        };
        const acceptedRecipes = filterRecipes(recipes);
        console.log("acceptedRecipes", acceptedRecipes);
        setUserRecipes(() => acceptedRecipes);
      });
  }

  function deleteUserRecipes(recipeId) {
    return axios.delete(`/savedrecipes/${recipeId}`, { "id": recipeId })
      .then(getSavedRecipes);
  };

  const userRecipesData = { addUserRecipes, deleteUserRecipes, getSavedRecipes, userRecipes };

  return (
    <userRecipesContext.Provider value={userRecipesData}>
      {props.children}
    </userRecipesContext.Provider>
  );
};
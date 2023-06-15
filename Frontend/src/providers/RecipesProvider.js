import { createContext, useState } from "react";
import axios from "axios";

// Create a Contexft
export const recipesContext = createContext();

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

// Create a Component wrapper from Context.Provider
export default function RecipesProvider(props) {
  // Here is our Shared State Object
  const [recipes, setRecipes] = useState([]);

  function addRecipes(params) {
    return axios.get("/recipes", { params })
      .then((all) => {
        setRecipes(() => all.data);
      });
  }

  const recipesData = { addRecipes, recipes };
  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <recipesContext.Provider value={recipesData}>
      {props.children}
    </recipesContext.Provider>
  );
};
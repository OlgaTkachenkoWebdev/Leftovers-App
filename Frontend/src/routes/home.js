import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ReceiptCarousel from "../components/ReceiptCarousel";
import ShowSpinner from "../components/Spinner";
import { Fragment, useContext, useEffect, useState } from "react";

import { leftoversContext } from '../providers/LeftoversProvider';
import { recipesContext } from "../providers/RecipesProvider";
import { filtersContext } from "../providers/FiltersProvider";
import { userRecipesContext } from "../providers/UsersRecipesProvider"

function Home() {
  const { leftovers } = useContext(leftoversContext);
  const { recipes, addRecipes } = useContext(recipesContext);
  const { diets, mealtypes, intolerances } = useContext(filtersContext);
  const { getSavedRecipes } = useContext(userRecipesContext);

  const [showSpinner, setShowSpinner] = useState(true);

  let leftoversNames = Object.keys(leftovers);
  const formattedLeftovers = leftoversNames.join();

  let dietsNames = Object.keys(diets);
  const formattedDiets = dietsNames.join();

  let mealtypesNames = Object.keys(mealtypes);
  const formattedMealtypes = mealtypesNames.join();

  let intolerancesNames = Object.keys(intolerances);
  const formattedIntolerances = intolerancesNames.join();

  // useEffect(() => {
  //   setShowSpinner(true);
  //   async function fetchData() {
  //     const savedRecipes = await getSavedRecipes()
  //     const apiRecipes = await addRecipes({ "ingredients": formattedLeftovers, "diet": formattedDiets, "mealtype": formattedMealtypes, "intolerances": formattedIntolerances })

  //     let filteredRecipes = [];
  //     for (const savedRecipe in savedRecipes) {
  //       for (const apiRecipe in apiRecipes) {
  //         if (savedRecipe.apiId !== apiRecipe.id) {
  //           filteredRecipes.push(apiRecipe)
  //         }
  //       }
  //     }
  //     setShowSpinner(false)
  //     return filteredRecipes;
  //   }
  //   fetchData()
  //     .catch(console.error);
  // }, [leftovers, diets, mealtypes, intolerances])

  useEffect(() => {
    setShowSpinner(true);
    addRecipes({ "ingredients": formattedLeftovers, "diet": formattedDiets, "mealtype": formattedMealtypes, "intolerances": formattedIntolerances })
      .finally(() => {
        setShowSpinner(false)
      })
  }, [leftovers, diets, mealtypes, intolerances])

  return (
    <Fragment>
      <NavBar />
      <main className="main">
        <SideBar />
        <section className="content col-9">
          <header className="carousel">
            {showSpinner ? <ShowSpinner /> : <ReceiptCarousel recipes={recipes} />}
          </header>
        </section>
      </main>
    </Fragment>
  );
}

export default Home;
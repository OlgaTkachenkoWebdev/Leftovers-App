import { createContext, useState } from "react";

// Create a Contexft
export const filtersContext = createContext();

// Create a Component wrapper from Context.Provider
export default function FiltersProvider(props) {

  // Here is our Shared State Object
  const [diets, setDiet] = useState({});
  const [mealtypes, setMealtype] = useState({});
  const [intolerances, setIntolerances] = useState({});

  // Functions to change  the leftovers state
  const addDiet = function (diet) {
    setDiet(prev => {
      return {
        ...prev,
        [diet]: diet
      };
    });
  };

  const deleteDiet = function (diet) {
    let updatedState = { ...diets };
    delete updatedState[diet];
    setDiet(updatedState);
  };

  const addMealtype = function (mealtype) {
    setMealtype(prev => {
      return {
        ...prev,
        [mealtype]: mealtype
      };
    });
  };

  const deleteMealtype = function (mealtype) {
    let updatedState = { ...mealtypes };
    delete updatedState[mealtype];
    setMealtype(updatedState);
  };

  const addIntolerances = function (intolerance) {
    setIntolerances(prev => {
      return {
        ...prev,
        [intolerance]: intolerance
      };
    });
  };

  const deleteIntolerances = function (intolerance) {
    let updatedState = { ...intolerances };
    delete updatedState[intolerance];
    setIntolerances(updatedState);
  };

  const filtersData = { addDiet, deleteDiet, addMealtype, deleteMealtype, addIntolerances, deleteIntolerances, diets, mealtypes, intolerances };

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <filtersContext.Provider value={filtersData}>
      {props.children}
    </filtersContext.Provider>
  );
};

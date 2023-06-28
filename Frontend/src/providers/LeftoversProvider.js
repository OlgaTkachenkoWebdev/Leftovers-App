import { createContext, useState } from "react";

import setArrayLocalStorage from "../components/helpers/setArrayLocalStorage";

// Create a Contexft
export const leftoversContext = createContext();

// Create a Component wrapper from Context.Provider
export default function LeftoversProvider(props) {

  // Shared State Object
  const [leftovers, setLeftovers] = useState([]);

  // Functions to change  the leftovers state
  // adds leftover to the local storage and updates the state
  const addLeftover = function (leftover) {
    setLeftovers((prev) => {
      if (prev.includes(leftover)) {
        return prev;
      } else {
        const updatedLeftovers = [...prev, leftover];
        setArrayLocalStorage("leftovers", updatedLeftovers);
        return updatedLeftovers;
      }
    });
  };

  // deletes leftover from the local storage and updates the state
  const deleteLeftover = function (leftover) {
    setLeftovers((prev) => {
      const leftoverIndex = prev.indexOf(leftover);
      const updatedLeftovers = prev.toSpliced(leftoverIndex, 1);
      setArrayLocalStorage("leftovers", updatedLeftovers);
      return updatedLeftovers;
    }
    );
  };

  const leftoversData = { addLeftover, deleteLeftover, leftovers };

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <leftoversContext.Provider value={leftoversData}>
      {props.children}
    </leftoversContext.Provider>
  );
};

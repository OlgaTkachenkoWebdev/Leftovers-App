import { createContext, useState } from "react";

// Create a Contexft
export const leftoversContext = createContext();

// Create a Component wrapper from Context.Provider
export default function LeftoversProvider(props) {

  // Here is our Shared State Object
  const [leftovers, setLeftovers] = useState({});
  console.log("leftoversState", leftovers);

  // Functions to change  the leftovers state
  const addLeftover = function (leftover) {
    setLeftovers(prev => {
      return {
        ...prev,
        [leftover]: leftover
      };
    });
  };

  const deleteLeftover = function (leftover) {
    let updatedState = { ...leftovers };
    delete updatedState[leftover];
    setLeftovers(updatedState);
    localStorage.setItem("leftovers", JSON.stringify(updatedState));
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

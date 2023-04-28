import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import About from "./routes/About";
import ShoppingList from "./routes/ShoppingList";
import RecipeHistory from "./routes/RecipeHistory";

import LeftoversProvider from "./providers/LeftoversProvider";
import RecipesProvider from "./providers/RecipesProvider";
import UserRecipesProvider from "./providers/UsersRecipesProvider";
import FiltersProvider from "./providers/FiltersProvider";


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "myrecipes",
    element: <RecipeHistory />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "shoppinglist",
    element: <ShoppingList />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <FiltersProvider>
      <RecipesProvider>
        <LeftoversProvider>
          <UserRecipesProvider>
              <RouterProvider router={router} />
          </UserRecipesProvider>
        </LeftoversProvider>
      </RecipesProvider>
      </FiltersProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

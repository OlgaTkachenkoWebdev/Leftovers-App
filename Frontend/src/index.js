import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Login from "./routes/Login";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import ShoppingList from "./routes/ShoppingList";
import LeftoversProvider from "./providers/LeftoversProvider";
import RecipesProvider from "./providers/RecipesProvider";
import UserRecipesProvider from "./providers/UsersRecipesProvider";
import RecipeHistory from "./routes/RecipeHistory";
import AuthProvider from "./providers/AuthProvider";
import FiltersProvider from "./providers/FiltersProvider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
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
    <AuthProvider>
      <FiltersProvider>
      <RecipesProvider>
        <LeftoversProvider>
          <UserRecipesProvider>
              <RouterProvider router={router} />
          </UserRecipesProvider>
        </LeftoversProvider>
      </RecipesProvider>
      </FiltersProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

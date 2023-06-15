import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/ShoppingList.css";

import { Fragment } from "react";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

import ShoppingListComp from "../components/ShoppingListComp";


function ShoppingList() {
  return (
    <Fragment>
      <NavBar />
      <main className="main">
        <SideBar />
        <section className="content col-9">
          <ShoppingListComp />
        </section>
      </main>
    </Fragment>
  );
}

export default ShoppingList;
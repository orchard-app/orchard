import ItemForm from "../components/ItemForm";

import React, { Fragment } from "react";
import { Hero } from "../components";

const AddItem = () => (
  <Fragment>
    <div>
      <h1>Add an Item to Your Inventory</h1>
      <ItemForm />
    </div>
  </Fragment>
);

export default AddItem;

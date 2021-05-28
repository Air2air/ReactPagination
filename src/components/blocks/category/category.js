import React from "react";
import "./styles.scss";

const Category = (props) => (
  <div className="d-flex flex-column align-itens-center justify-items-center block-category p-2 justify-self-end">
    <div className="align-itens-center justify-items-center value p-0">
      {props.category}
    </div>
    <div className="align-itens-center justify-items-center label p-0">Category</div>
  </div>
);

export default Category;
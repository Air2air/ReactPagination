import React from "react";
import "./styles.scss";

const Confidence = (props) => (
  <div className="d-flex flex-column align-itens-center justify-items-center block-confidence p-2 justify-self-end">
    <div className="align-itens-center justify-items-center value p-0">
      {props.level}
      <span>%</span>
    </div>
    <div className="align-itens-center justify-items-center label p-0">Confidence</div>
  </div>
);

export default Confidence;

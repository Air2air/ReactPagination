import React from "react";
import "./styles.scss";

const Confidence = (props) => (
  <div className="d-flex flex-column confidence p-2 justify-self-end">
    <div className="value p-0">
      {props.level}
      <span>%</span>
    </div>
    <div className="label p-0">Confidence</div>
  </div>
);

export default Confidence;

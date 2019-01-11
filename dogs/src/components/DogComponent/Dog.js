import React from "react";
import "./Dog.css";

const Dog = props => {
  return (
    <div className="dog__img">
      <img src={props.dogImg} alt="Random dog" />
    </div>
  );
};

export default Dog;

import React from "react";
import "./StarWars.css";

const Character = props => {
  return (
    <div className="character__profile">
      <h2 className="character__name">{props.character.name}</h2>
      <p className="character__birth-year">
        Birth Year: {props.character.birth_year}
      </p>
      <p className="character__mass">Mass: {props.character.mass}</p>
      <p className="character__gender">Gender: {props.character.gender}</p>
      <p className="character__hair-color">
        Hair Color: {props.character.hair_color}
      </p>
      <p className="character__eye-color">
        Eye Color: {props.character.eye_color}
      </p>
    </div>
  );
};

export default Character;

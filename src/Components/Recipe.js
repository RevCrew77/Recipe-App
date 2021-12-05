import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, totalWeight, dietLabels }) => {
  return (
    <div className={style.recipe}>
        <div className="rcpImg">
          <img src={image} alt="Recipe Image" />
        </div>
        <div className={style.rcpTtl}>
          <h4>{title}</h4>
          <p>Weight: {totalWeight}</p>
          <p>Diet Labels: {dietLabels}</p>
          <p>{calories}</p>
        </div>
        <button className="checkme">Check Me!</button>
    </div>
  );
};

export default Recipe;

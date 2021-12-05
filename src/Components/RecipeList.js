import React from "react";
import "./RecipeCard.css"
import { Link } from "react-router-dom";

function RecipeList() {
  return (
    <div className="cards">
    <Link to="/chicken" className="recipe">
      <div className="rcpImg">
        <img src="https://www.simplyrecipes.com/thmb/4sjJCJs0N1GY5kTHmqyELAAvUuc=/2000x1334/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2014__09__Classic-Baked-Chicken-LEAD-1-47dc5e85c6e24eb4b54cabb4023a7698.jpg" alt="Recipe Image" />
      </div>
      <div className="rcpTtl">
        <h4>Chicken</h4>
        <p>Fragil Meal and Fresh Vegetables</p>
      </div>
      <button className="checkme">Check Me!</button>
    </Link>

    <Link to="/beef" className="recipe">
      <div className="rcpImg">
        <img src="https://img.taste.com.au/hQOx9buX/w643-h428-cfill-q90/taste/2016/11/basic-roast-beef-vegetables-21318-1.jpeg" alt="food" />
      </div>
      <div className="rcpTtl">
        <h4>Beef</h4>
        <p>Fragil Meal and Fresh Vegetables</p>
      </div>
      <button className="checkme">Check Me!</button>
    </Link>

    <Link to="/fish" className="recipe">
      <div className="rcpImg">
        <img src="https://st2.depositphotos.com/1003814/8577/i/950/depositphotos_85776102-stock-photo-fish-dish-roasted-fish-and.jpg" alt="food" />
      </div>
      <div className="rcpTtl">
        <h4>Fish</h4>
        <p>Delicious fish and seafood</p>
      </div>
      <button className="checkme">Check Me!</button>
    </Link>

    <Link to="/desserts" className="recipe">
      <div className="rcpImg">
        <img src="http://gourmetwithblakely.com/wp-content/uploads/2020/07/DSF8138.jpg" alt="food"/>
      </div>
      <div className="rcpTtl">
        <h4>Desserts</h4>
        <p>Fragil Meal and Fresh Vegetables</p>
      </div>
      <button className="checkme">Check Me!</button>
    </Link>
    </div>
  );
}
export default RecipeList;

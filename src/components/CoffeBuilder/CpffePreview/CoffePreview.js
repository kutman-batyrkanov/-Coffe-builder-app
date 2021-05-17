import CoffeIngredient from "../CoffeIngredient/CoffeIngredient";
import classes from "./CoffePreview.module.css";

const CoffePreview = ({ ingredients, price }) => {
  const result = [];

  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<CoffeIngredient key={ingredient + i} type={ingredient} />);
    }
  }
  return (
    <div className={classes.CoffePreview}>
      <div className={classes.color}>{result}</div>
        {price.toFixed(1)} som 
    </div>
  );
};

export default CoffePreview;

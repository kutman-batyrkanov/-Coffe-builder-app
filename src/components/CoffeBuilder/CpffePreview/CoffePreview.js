import CoffeIngredient from "../CoffeIngredient/CoffeIngredient";
import classes from "./CoffePreview.module.css";

const CoffePreview = ({ ingredients, price }) => {
  const result = [];

  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<CoffeIngredient type={ingredient} />);
    }
  }
  return (
    <div className={classes.CoffePreview}>
      <div className={classes.color}>{result}</div>
      {price}
    </div>
  );
};

export default CoffePreview;

import CoffeIngredient from "../CoffeIngredient/CoffeIngredient";
import classes from "./CoffePreview.module.css";
import shelf from '../../../images/shelf.png';

const CoffePreview = ({ ingredients, price }) => {
  const result = [];

  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<CoffeIngredient key={ingredient + i} type={ingredient} />);
    }
  }
  return (
    <div className={classes.CoffePreview}>
      <div
        className={classes.shelf}
        style={{ backgroundImage: `url(${shelf})` }}
      >
        <div>
          <div className={classes.color}>{result}</div>
        </div>
      </div>
      <div>
        <div className={classes.price}>{price.toFixed(1)} som</div>
        </div>
    </div>
  );
};

export default CoffePreview;

import Button from "../../UI/Button/Button";
import classes from "./CoffeContrlos.module.css";
import CoffeControl from "./CoffeControl/CoffeControl";

const CoffeContrlos = ({ ingredients, addedIngredients, removeIngredints, startOrdering }) => {
  const results = [];
    let total = 0;
    for (const ingredient in ingredients) {
        total += ingredients[ingredient];

        results.push(<CoffeControl type={ingredient} addedIngredients={addedIngredients} removeIngredints={removeIngredints} count={ingredients[ingredient]} />)
    }
  // const result = [];
  // const total = 0;
  // for (const ingredient in ingredients) {
  //   total += ingredients[ingredient];
  //   result.push(<CoffeControl type={ingredient} />);
  // }
  return (
    <div className={classes.CoffeControlos}>
      {results}
      <div className={classes.Button}>
        <Button disabled={!total} onClick={() =>startOrdering()}>Order</Button>
      </div>
    </div>
  );
};

export default CoffeContrlos;

import Button from "../../UI/Button/Button";
import classes from "./CoffeContrlos.module.css";
import CoffeControl from "./CoffeControl/CoffeControl";

const CoffeContrlos = ({
  ingredients,
  startOrdering,
}) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    total += ingredients[ingredient];

    results.push(
      <CoffeControl
        key={ingredient}
        type={ingredient}
        count={ingredients[ingredient]}
      />
    );
  }
  // const result = [];
  // const total = 0;
  // for (const ingredient in ingredients) {
  //   total += ingredients[ingredient];
  //   result.push(<CoffeControl type={ingredient} />);
  // }
  return (
    <div className={classes.CoffeControlos}>
      <strong>Coffee</strong>
      {results}
      <div className={classes.Button}>
        <Button disabled={!total} onClick={() => startOrdering()}>
          Order
        </Button>
      </div>
    </div>
  );
};

export default CoffeContrlos;

import classes from "./CoffeContrlos.module.css";
import CoffeControl from "./CoffeControl/CoffeControl";

const CoffeContrlos = ({ ingredients }) => {
    const result = [];
    for (const ingredient in ingredients) {
        result.push(<CoffeControl type={ingredient} />)
    }
  return <div className={classes.CoffeControlos}>{result}</div>;
};

export default CoffeContrlos;

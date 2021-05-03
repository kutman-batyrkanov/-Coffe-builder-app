import Button from "../../../UI/Button/Button";
import CoffeIngredient from "../../CoffeIngredient/CoffeIngredient";
import classes from "./CoffeControl.module.css";

const CoffeControl = ({ type, addedIngredients, removeIngredints  }) => {
    return ( 
    <div className={classes.CoffeControl}>
        <Button onClick={addedIngredients}>+</Button>
        <div className={classes.ingredient} > <CoffeIngredient type={type}/></div>
        <Button onClick={removeIngredints}>-</Button>
    </div>
     );
}
 
export default CoffeControl ;
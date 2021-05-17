import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";
import Button from "../../../UI/Button/Button";
import CoffeIngredient from "../../CoffeIngredient/CoffeIngredient";
import classes from "./CoffeControl.module.css";

const CoffeControl = ({ type, count }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.CoffeControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.ingredient}>
        <CoffeIngredient type={type} fixed />
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
};

export default CoffeControl;

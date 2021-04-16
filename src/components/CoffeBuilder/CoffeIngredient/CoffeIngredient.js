import classes from "./CoffeIngredient.module.css";

import americano from "../../../images/americano.svg";

const CoffeIngredient = ({type}) => {
    const types = {
    }
    return ( 
    <div className={classes.CoffeIngredient} style={types[type]}></div>
     );
}
 
export default CoffeIngredient;
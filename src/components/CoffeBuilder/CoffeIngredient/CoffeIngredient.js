import classes from "./CoffeIngredient.module.css";
import americano from '../../../images/stur.png';
import cappuccino from '../../../images/logo.png'
// import americano from "../../../images/americano.svg";

const CoffeIngredient = ({type}) => {
    const types = {
        americano:  { backgroundImage: `url(${americano})`,backgroundSize : "cover" , width: "50px", height: "50px"  },
        cappuccino: { backgroundImage: `url(${cappuccino})` ,backgroundSize : "cover", width: "50px", height: "50px" },   
       
    }
    return ( 
    <div className={classes.CoffeIngredient} style={types[type]}></div>
     );
}
 
export default CoffeIngredient;
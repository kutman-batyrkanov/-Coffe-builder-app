import classes from "./CoffeIngredient.module.css";

import americano from "../../../images/americano.svg";

const CoffeIngredient = ({type}) => {
    const types = {
        americano: {backgroundImage: `url40(${americano})`, width: "50px", height: "50px", backgroundSize: "cover" },
        americano: {backgroundImage: `url40(${americano})`, width: "50px", height: "50px"},
        americano: {backgroundImage: `url40(${americano})`, width: "50px", height: "50px"},
        americano: {backgroundImage: `url40(${americano})`, width: "50px", height: "50px"},
        americano: {backgroundImage: `url40(${americano})`, width: "50px", height: "50px"},
        americano: {backgroundImage: `url40(${americano})`, width: "50px", height: "50px"}

    }
    return ( 
    <div className={classes.CoffeIngredient} style={types[type]}></div>
     );
}
 
export default CoffeIngredient;
import classes from "./CoffeBuilder.module.css";
import { useEffect, useState } from "react";
import CoffeContrlos from "./CoffeContrlos/CoffeContrlos";
import CoffePreview from "./CpffePreview/CoffePreview";
import axios from "axios";

const CoffeBuilder = () => {
    const [ingredients, setIngredients] = useState({});
    const [price, setPrice] = useState(0)
    const prices = {
        americano: 50,
        cappuccino: 70,
        latte: 70,
        expresso: 80,
        coldcofee: 50,
    }
    useEffect (() => {
        axios.get("https://builder-57473-default-rtdb.firebaseio.com/default.json")
        .then((response) => {
            setIngredients(response.data.ingredients);
            setPrice(response.data.price)
        })
    }, [])
    return ( 
    <div className={classes.CoffeBuilder}>
      <CoffePreview ingredients={ingredients}/>
        <CoffeContrlos ingredients={ingredients} />
    </div>
     );
}
 
export default CoffeBuilder;
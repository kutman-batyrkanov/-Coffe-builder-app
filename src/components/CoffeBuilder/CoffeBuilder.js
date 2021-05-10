import classes from "./CoffeBuilder.module.css";
import { useState } from "react";
import CoffeContrlos from "./CoffeContrlos/CoffeContrlos";
import CoffePreview from "./CpffePreview/CoffePreview";
import axios from "axios";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import OrderSummary from "./OrderSummary/OrderSummary";

const CoffeBuilder = ({ history }) => {
  const ingredients = useSelector((state) => state.ingredients);
  const price = useSelector((state) => state.price);
  const [ordering, setOrdering] = useState(false);
  // useEffect(loadDefaults, [])
  // function loadDefaults() {
  //     axios.get('https://builder-57473-default-rtdb.firebaseio.com/dafault.json')
  //         .then(response => {
  //             setPrice(response.data.price);

  // For arrays
  // setIngredients(Object.values(response.data.ingredients));
  // For objects
  //             setIngredients(response.data.ingredients);
  //         });
  // }
  function finishOrder() {
    axios
      .post("https://builder-57473-default-rtdb.firebaseio.com/orders.json", {
        ingredients: ingredients,
        price: price,
        address: "1234 Jusaeva str",
        phone: "0 777 777 777",
        name: "Sadyr Japarov",
      })
      .then(() => {
        setOrdering(false);
        // loadDefaults();
        history.push("/checkout");
      });
  }
  function startOrdering() {
    setOrdering(true);
  }
  function stopOrdering() {
    setOrdering(false);
  }

  return (
    <div className={classes.CoffeBuilder}>
      <CoffePreview ingredients={ingredients} price={price} />
      <CoffeContrlos ingredients={ingredients} startOrdering={startOrdering} />
      <Modal show={ordering} cancel={stopOrdering}>
        <OrderSummary ingredients={ingredients} price={price} />
        <div className={classes.Button}>
          <Button onClick={() => finishOrder()} green>
            Checkout
          </Button>
          <Button onClick={() => stopOrdering()}>Cansel</Button>
        </div>
      </Modal>
    </div>
  );
};

export default CoffeBuilder;
// import classes from "./CoffeBuilder.module.css";
// import { useState } from "react";
// import CoffeContrlos from "./CoffeContrlos/CoffeContrlos";
// import CoffePreview from "./CpffePreview/CoffePreview";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const CoffeBuilder = ({ history }) => {
//     // const [ingredients, setIngredients] = useState({});
//     // const [ordering, setOrdering] = useState(false)
//     // const [price, setPrice] = useState(0)
//     // const prices = {
//     //     americano: 50,
//     //     cappuccino: 70,
//     //     latte: 70,
//     //     expresso: 80,
//     //     coldcofee: 50
//     // };
//     const ingredients = useSelector(state => state.ingredients);
//     const price = useSelector(state => state.price);
//     const [ordering, setOrdering] = useState(false);
//     // useEffect(loadDefaults, [])
//     // function loadDefaults() {
//     //     axios.get('https://builder-57473-default-rtdb.firebaseio.com/dafault.json')
//     //         .then(response => {
//     //             setPrice(response.data.price);

//                 // For arrays
//                 // setIngredients(Object.values(response.data.ingredients));
//                 // For objects
//     //             setIngredients(response.data.ingredients);
//     //         });
//     // }
//     function finishOrder() {
//         axios.get('https://builder-57473-default-rtdb.firebaseio.com/dafault.json', {
//             ingredients: ingredients,
//             price: price,
//             address: "1234 Jusaeva str",
//             phone: "0 777 777 777",
//             name: "Sadyr Japarov",

//         })
//             .then(() => {
//                 setOrdering(false);
//                 // loadDefaults();
//                 history.push();
//             });

//      }
//     function startOrdering(){
//       setOrdering(true)
//     }
//     function stopOrdering(){
//         setOrdering(false)
//     }

//     // function addedIngredients(type) {
//     //     const newIngredient = { ...ingredients };
//     //     newIngredient[type]++;
//     //     // setPrice(price + prices[type]++)
//     //     // setIngredients(newIngredient)
//     // }
//     // function removeIngredints(type) {
//     //     if (ingredients[type]) {
//     //         const newIngredient = { ...ingredients };
//     //         newIngredient[type]--;
//     //         // setPrice(price - prices[type]--)
//     //         // setIngredients(newIngredient)
//     //     }

//     // }
//     // // function addedIngredients(type){
//     //      const newIngredients = {...ingredients};
//     //      newIngredients[type]++
//     //      setPrice(price - prices[type]++);
//     //      setIngredients(newIngredients)
//     // }
//     // function removeIngredints(type){
//     //  if(ingredients[type]);
//     //  const newIngredient = {...ingredients};
//     //  newIngredient[type]--;
//     //  setPrice(price - prices[type]--);
//     //  setIngredients(newIngredient)
//     // }
//     return (
//     <div className={classes.CoffeBuilder}>
//       <CoffePreview ingredients={ingredients}/>
//         <CoffeContrlos ingredients={ingredients}  />
//     </div>
//      );
// }

// export default CoffeBuilder;

import classes from "./CoffeBuilder.module.css";
import { useEffect, useState } from "react";
import CoffeContrlos from "./CoffeContrlos/CoffeContrlos";
import CoffePreview from "./CpffePreview/CoffePreview";
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import OrderSummary from "./OrderSummary/OrderSummary";
import { load } from "../../store/actions/builder";
import withAxios from "../withAxios";

const CoffeBuilder = ({ history }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const ingredients = useSelector((state) => state.builder.ingredients);
  const price = useSelector((state) => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

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

  function startOrdering() {
    if(isAuthenticated) {
      setOrdering(true);
    }
    else {
      history.push('./auth');
    }
  }

  function stopOrdering() {
    setOrdering(false);
  }
  
  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push("/checkout");
  }

  return (
    <div className={classes.CoffeBuilder}>
      <CoffePreview ingredients={ingredients} price={price} />
      <CoffeContrlos ingredients={ingredients} startOrdering={startOrdering} />
      <Modal show={ordering} cancel={stopOrdering}>
        <OrderSummary ingredients={ingredients} price={price} />
        <div className={classes.Button}>
          <Button onClick={finishOrdering} green="green">
            Checkout
          </Button>
          <Button onClick={stopOrdering}>Cansel</Button>
        </div>
      </Modal>
    </div>
  );
};

export default withAxios(CoffeBuilder, axios);

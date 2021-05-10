import classes from "./Checkout.module.css";
import CoffePreview from "../CoffeBuilder/CpffePreview/CoffePreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import axios from "axios";

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace("/");
  }
  function submitCallback(event) {
    const data = new FormData(event.target);

    axios
      .post("https://builder-57473-default-rtdb.firebaseio.com/dafault.json", {
        name: data.get("name"),
        address: data.get("address"),
        phone: data.get("phone"),
        ingredients: {
          americano: 10,
          cappuccino: 10,
        },
        price: 100,
      })
      .then((response) => {
        history.replace("/");
      });
    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <CoffePreview
        ingredients={{
          americano: 5,
          cappuccino: 10,
        }}
        price={150}
      />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback}
      />
    </div>
  );
};

export default Checkout;

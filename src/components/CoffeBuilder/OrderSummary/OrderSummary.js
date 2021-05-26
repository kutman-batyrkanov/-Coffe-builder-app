import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price }) => {
  const labels = {
    americano: "americano",
    cappuccino: "cappuccino",
    latte: "latte",
    coldcoffe: "coldcoffe",
    smooth: "smooth",
    strcoffe: "strcoffe",
  };
  const result = Object.keys(ingredients).map((type) => (
    <li key={type}>
      {labels[type]}: {ingredients[type]}
    </li>
  ));
  return (
    <div className={classes.ord}>
    <div className={classes.OrderSummary}>
      <h3>Order Summary</h3>
      <ul className={classes.ul}>{result}</ul>
      <strong>Total price : {price.toFixed(1)} som </strong>
    </div>
    </div>
  );
};
export default OrderSummary;

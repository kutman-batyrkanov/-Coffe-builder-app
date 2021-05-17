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
    <ul key={type}>
      {labels[type]}: {ingredients[type]}
    </ul>
  ));
  return (
    <div className={classes.OrderSummary}>
      <h3>Order Summary</h3>
      <ul className={classes.ul}>{result}</ul>
      <strong>Total price : {price.toFixed(1)} som </strong>
    </div>
  );
};
export default OrderSummary;

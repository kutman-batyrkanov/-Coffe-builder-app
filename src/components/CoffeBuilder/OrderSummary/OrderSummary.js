import classes from "./OrderSummary.module.css";
const OrderSummary = ({ ingredients, price }) => {
  const labels = {
    americano:'americano',
     cappuccino:"cappuccino",
  };
  const result = Object.keys(ingredients).map((type) => (
    <ul>
      {labels[type]} : {ingredients[type]}
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

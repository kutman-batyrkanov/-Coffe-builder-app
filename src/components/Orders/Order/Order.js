import classes from "./Order.module.css";

const Order = ({ name, phone, address, ingredients, price }) => {
  const outputIngredients = Object.keys(ingredients).map((ingredient) => (
    <em key={ingredient}>
      {ingredient} - {ingredients[ingredient]}
    </em>
  ));

  return (
    <div className={classes.Order}>
      <div className={classes.test}>
        <h1>{name}</h1>
        <span>{phone}</span>
        <h5>{address}</h5>
      </div>
      <div>{outputIngredients}</div>
      <strong>{price}som</strong>
    </div>
  );
};

export default Order;

import classes from "./Order.module.css";

const Order = ({ name, phone, address, ingredients, price }) => {
  const outputIngredients = Object.keys(ingredients).map((ingredient) => (
    <li key={ingredient}>
      {ingredient} - {ingredients[ingredient]}
    </li>
  ));

  return (
    <div className={classes.divorder}>
    <div className={classes.Order}>
      <h2>Orders</h2>
      <hr className={classes.hr} />
      <div className={classes.div}>
      <div>
        Name: {name}
      </div>
      <div>
        Phone: {phone}
      </div>
      <div>
        Address: {address}
      </div>
      </div>
     
      <hr className={classes.hr} />
      <div className={classes.divul}>
      <ul>{outputIngredients}</ul>
      </div>
      <hr />
      <strong>Price: {price}</strong>
    </div>
    </div>
  );
};

export default Order;

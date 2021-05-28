import Button from "../../UI/Button/Button"
import classes from "./CheckoutForm.module.css"

const CheckoutForm = ({ cancelCallback, submitCallback }) => {
  return (
    <form className={classes.CheckoutForm} onSubmit={submitCallback}>
      <div className={classes.name}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className={classes.address}>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" required />
      </div>
      <div className={classes.phone}>
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" required pattern="0[0-9]{9}" />
      </div>
      <div className={classes.Button}>
      <Button green="green">Checkout</Button>
      <Button onClick={cancelCallback} red="red">Cancel</Button>
      </div>
    </form>
  );
}
 
export default CheckoutForm;
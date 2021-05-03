import classes from "./Checkout.module.css";
import CoffePreview from "../CoffeBuilder/CpffePreview/CoffePreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const Checkout = ({ history }) => {
    function cancelCallback() {
        history.replace('/');
    }

    return ( 
    <div className={classes.Checkout}>
        <CoffePreview ingredients={{
            americano: 5,
            cappuccino: 10,
        }} price={150} />
        <CheckoutForm />
    </div>
     );
}
 
export default Checkout;
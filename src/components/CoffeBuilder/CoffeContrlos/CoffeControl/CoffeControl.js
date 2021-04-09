import classes from "./CoffeControl.module.css";

const CoffeControl = ({ type }) => {
    return ( 
    <div className={classes.CoffeControl}>
        <button>+</button>
        <button>-</button>
        <br></br>
        <button>+</button>
        <button>-</button>
        <br></br>
        <button>+</button>
        <button>-</button>
        <br></br>
        <button>+</button>
        <button>-</button>
        <br></br>
        <button>+</button>
        <button>-</button>
        <br></br>
        <button>+</button>
        <button>-</button>
    </div>
     );
}
 
export default CoffeControl ;
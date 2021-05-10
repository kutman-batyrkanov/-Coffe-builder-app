import classes from "./CoffeIngredient.module.css";
import americano from "../../../images/stur.png";
import cappuccino from "../../../images/logo.png";
import latte from "../../../images/latte.png";
import smooth from "../../../images/smooth.png";
import strcoffe from "../../../images/strcoffe.png";
import coldcoffe from "../../../images/coldcoffe.png";

const CoffeIngredient = ({ type }) => {
  const types = {
    americano: {
      backgroundImage: `url(${americano})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "10px",
    },
    cappuccino: {
      backgroundImage: `url(${cappuccino})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "10px",
    },
    latte: {
      backgroundImage: `url(${latte})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "10px",
    },
    smooth: {
      backgroundImage: `url(${smooth})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "10px",
    },
    strcoffe: {
      backgroundImage: `url(${strcoffe})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "10px",
    },
    coldcoffe: {
      backgroundImage: `url(${coldcoffe})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "10px",
    },
  };
  return <div className={classes.CoffeIngredient} style={types[type]}></div>;
};

export default CoffeIngredient;

import classes from "./CoffeIngredient.module.css";
import americano from "../../../images/stur.png";
import cappuccino from "../../../images/logo.png";
import latte from "../../../images/latte.png";
import smooth from "../../../images/smooth.png";
import strcoffe from "../../../images/strcoffe.png";
import coldcoffe from "../../../images/coldcoffe.png";
import React from "react";

const CoffeIngredient = ({ type }) => {
  const types = {
    americano: {
      backgroundImage: `url(${americano})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "8px",
    },
    cappuccino: {
      backgroundImage: `url(${cappuccino})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "8px",
    },
    latte: {
      backgroundImage: `url(${latte})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "8px",
    },
    smooth: {
      backgroundImage: `url(${smooth})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "8px",
    },
    strcoffe: {
      backgroundImage: `url(${strcoffe})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "8px",
    },
    coldcoffe: {
      backgroundImage: `url(${coldcoffe})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "8px",
    },
  };

  return <div className={classes.CoffeIngredient} style={types[type]}></div>;
};

export default React.memo (CoffeIngredient);

import classes from "./Logo.module.css";
import logo from "../../images/logo1.png";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt={"starbucks"} />
      <div>Coffe</div>
    </div>
  );
};

export default Logo;

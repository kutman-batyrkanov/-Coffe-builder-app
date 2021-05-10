import classes from "./NavItem.module.css";
import { NavLink } from "react-router-dom"

const NavItem = ({url, children}) => {
    return ( 
        <div className={classes.NavItem}>
            <NavLink to={url} activeClassName={classes.active} exact>{children}</NavLink>
        </div>
     );
}
 
export default NavItem;
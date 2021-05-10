import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Order from "./Order/Order";

import classes from "./Orders.module.css";

const Oreders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('https://builder-57473-default-rtdb.firebaseio.com/orders.json')
        .then(response => {
            const newOrders = Object.keys(response.data).map(id => {
                return {
                    ...response.data[id],
                    id: id,
                };
            });
            setOrders(newOrders);
        });   
    }, []);

    const results = orders.map(order => <Order key={order.id} {...order} />)
    return ( 
    <div className={classes.Oreders}>
        {results}
    </div>
     );
}
 
export default Oreders;
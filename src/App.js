import Layout from "./components/Layout/Layout";
import CoffeBuilder from "./components/CoffeBuilder/CoffeBuilder";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";

import "./App.css";
import { Redirect, Route, Switch } from "react-router";



function App() {
  return (
    <div className="App">
      <Layout>
        <h1>Coffe Builder by Kutman Batyrkanov</h1>
        <Switch>
          <Route path="/" component={CoffeBuilder} exact />
          <Route path="./checkout" component={Checkout} />
          <Route path="./orders" component={Orders} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

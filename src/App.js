import Layout from "./components/Layout/Layout";
import CoffeBuilder from "./components/CoffeBuilder/CoffeBuilder";
import Checkout from "./components/Checkout/Checkout";

import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import Orders from "./components/Orders/Orders";
import Auth from "./components/Auth/Auth";
import Logout from "./components/Logout/Logout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { restore } from "./store/actions/auth";



function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  useEffect(() => restore(dispatch), [dispatch]);

  let routesOutput = (
    <Switch>
      <Route path="/" exact component={CoffeBuilder} />
      <Route path="/auth"  component={Auth} />
      <Redirect to="/auth" />
    </Switch>
  );
  if (isAuthenticated) {
    routesOutput = (
      <Switch>
        <Route path="/" exact component={CoffeBuilder} />
        <Route path="/checkout"  component={Checkout} />
        <Route path="/orders"  component={Orders} />
        <Route path="/auth"  component={Auth} />
        <Route path="/logout"  component={Logout} />
        <Redirect to="/" />
      </Switch>
    )
  }
  return (
    <div className="App">
      <Layout>
        <h1>Coffe Builder</h1>
        {routesOutput}
      </Layout>
    </div>
  );
}

export default App;

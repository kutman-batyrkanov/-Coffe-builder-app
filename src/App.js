import {  Route, Switch } from 'react-router';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import CoffeBuilder from './components/CoffeBuilder/CoffeBuilder';
import Layout from './components/Layout/Layout';
import Oreders from './components/Orders/Orders';


function App() {
  return (
    <div className="App">
      <Layout>
        <h1>Coffe Builder by Kutman Batyrkanov</h1>
        {/* <CoffeBuilder /> */}
        <Switch>
          <Route path="/" component={CoffeBuilder} exact />
          <Route path="./checkout" component={Checkout}/>
          <Route path="./oreders" component={Oreders}/>
          {/* <Redirect to='/' /> */}
        </Switch>
        </Layout>
      
    </div>
  );
}

export default App;

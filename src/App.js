import './App.css';
import CoffeBuilder from './components/CoffeBuilder/CoffeBuilder';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <h1>Coffe Builder by Kutman Batyrkanov</h1>
        <CoffeBuilder />
        </Layout>
      
    </div>
  );
}

export default App;

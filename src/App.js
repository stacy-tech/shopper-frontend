import logo from './logo.svg';
import './App.css';
import ProductIndex from './containers/ProductIndex';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Welcome to Shopper</h1>
      <Switch>
        <ProductIndex/>
      </Switch>
    </>
  );
}

export default App;

import './App.css';
import { ProductIndex, ProductShow } from './components'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Welcome to Shopper</h1>
      <Switch>
        <Route path="/products/:id"><ProductShow/></Route>
        <Route path="/products"><ProductIndex/></Route>
      </Switch>
    </>
  );
}

export default App;

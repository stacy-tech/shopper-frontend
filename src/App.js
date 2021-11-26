import './App.css';
import { ProductIndex, ProductShow, Nav } from './components'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>SHOPPER</h1>
      <Nav/>
      <Switch>
        <Route path="/products/:id"><ProductShow/></Route>
        <Route path="/products"><ProductIndex/></Route>
      </Switch>
    </>
  );
}

export default App;

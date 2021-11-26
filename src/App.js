import './App.css';
import { ProductIndex, ProductShow, Nav } from './components'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <>
      <h1>SHOPPER</h1>
      <Nav/>
      <Switch>
        <Route path="/products/:id"><ProductShow/></Route>
        <Route path="/products"><ProductIndex/></Route>
        <Route exact path="/"><ProductIndex/></Route>
      </Switch>
      { props.user.username }
      <Auth/>
    </>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps)(App);

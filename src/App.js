import './App.css';
import { ProductIndex, ProductShow, Nav, Auth } from './components'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <>
      <h1>SHOPPER</h1>
      <Nav/>
      { props.user.username ?
        <Switch>
          <Route path="/products/:id"><ProductShow/></Route>
          <Route path="/products"><ProductIndex/></Route>
          <Route exact path="/"><ProductIndex/></Route>
        </Switch>:
        <Auth/>
      }
    </>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps)(App);

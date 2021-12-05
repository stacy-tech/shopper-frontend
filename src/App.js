import './App.css';
import { ProductIndex, ProductShow, Nav, Auth} from './components'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { autoLogin } from './redux/actionCreators'


function App({user, autoLogin}) {

  useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  
  return (
    <>
      <h1>SHOPPER</h1>
      <Nav/>
      { user.username ?
        <Switch>
          <Route path="/products/:id"><ProductShow/></Route>
          <Route path="/products"><ProductIndex/></Route>
          <Route exact path="/"><ProductIndex/></Route>
          <Route exact path="/cart"></Route>
        </Switch>:
        <Auth/>
      }
    </>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);

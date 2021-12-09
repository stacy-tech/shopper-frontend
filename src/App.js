import './App.css';
import { ProductIndex, ProductShow, Nav, Auth} from './components'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { autoLogin } from './redux/actionCreators'
import  TransactionCart from './components/TransactionCart'


function App({user, autoLogin}) {

  useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  
  return (
    <>
      <h1>S Collection</h1>
      {/* <h2>S Collection is more than just a shopping destination. Join us!</h2> */}
      <Nav/>
      { user.username ?
        <Switch>
          <Route path="/products/:id"><ProductShow/></Route>
          <Route path="/products"><ProductIndex/></Route>
          <Route exact path="/"><ProductIndex/></Route>
          <Route exact path="/cart"><TransactionCart/></Route>
        </Switch>:
        <Auth/>   
      }
    </>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);

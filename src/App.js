import './App.css';
import { ProductIndex, ProductShow, Nav, Auth, Home} from './components'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { autoLogin } from './redux/actionCreators'
import  TransactionCart from './containers/TransactionCart'




function App({user, autoLogin}) {

  useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  
  return (
    <>
     <Route exact path="/" component={Home}/>
      <Nav/>
      { user.username ?
        <Switch>
          <Route path="/products/:id"><ProductShow/></Route>
          <Route path="/products"><ProductIndex/></Route>
          <Route exact path="/cart"><TransactionCart/></Route>
          <Route path="/"><ProductIndex/></Route>
        </Switch>:
        <Auth/>   
      }
    </>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);

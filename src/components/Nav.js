import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actionCreators'
import { cart } from '../redux/actionCreators'
import { Link } from 'react-router-dom'




function Nav({logout, username}){
    if(username){
        return <nav>
            <NavLink to="/products"><button>See All Items</button></NavLink>
            <button onClick={logout}>Logout</button>
            {/* <button onClick={cart}>Cart</button> */}
            <Link to='/cart'>Cart</Link>
        </nav>
   } else {
       return <nav>log in / register </nav>
   }
}

const mapStateToProps = (state) => ({username: state.user.username})

export default connect(mapStateToProps, {logout, cart})(Nav)
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actionCreators'

function Nav({logout, username}){
    if(username){
        return <nav>
            <NavLink to="/products"><button>See All Items</button></NavLink>
            <button onClick={logout}>Logout</button>
        </nav>
   } else {
       return <nav>log in / register </nav>
   }
}

const mapStateToProps = (state) => ({username: state.user.username})

export default connect(mapStateToProps, {logout})(Nav)
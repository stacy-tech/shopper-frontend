import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actionCreators'

function Nav({logout}){
    return <nav>
        <NavLink to="/products"><button>See All Items</button></NavLink>
        <button onClick={logout}>Logout</button>
    </nav>
}

export default connect(null, {logout})(Nav)
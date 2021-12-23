// import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actionCreators";
import { Link } from "react-router-dom";

function Nav({ logout, username }) {
  if (username) {
    return (
      <nav className="d-flex">
        <Link to="/products">See All Items</Link>
        <Link to="/cart">Cart</Link>
        
        <Link className="margin-left-auto btn-signout" onClick={logout}>Logout</Link>
      </nav>
    );
  } else {
    return <nav>log in / register </nav>;
  }
}

const mapStateToProps = (state) => ({ username: state.user.username });

export default connect(mapStateToProps, { logout })(Nav);

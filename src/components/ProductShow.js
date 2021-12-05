import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProduct } from '../redux/actionCreators'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cart } from '../redux/actionCreators'


function ProductShow({getProduct, title, imageUrl, description, price}){
    const routeId = useParams().id
    useEffect(() => {
        getProduct(routeId)
    },   [getProduct, routeId])
    
    return  <div className="show">
        <h1>{title}</h1>
        <img src={imageUrl} alt={title}/>
        <p>{description}</p>
        <h3>${price}</h3>
        <Link to={`/products/${parseInt(routeId) + 1}`}>Next</Link>
        {/* <Link to='/cart'>Cart</Link> */}
        <button onClick={cart}>Cart</button>
    </div>
}

const mapStateToProps = (state) => {
    return {...state.selectedProduct}
}

export default connect(mapStateToProps,{getProduct},)(ProductShow)
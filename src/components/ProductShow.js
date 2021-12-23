import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProduct } from '../redux/actionCreators'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/actionCreators'
// import { Transactions } from './'


function ProductShow({getProduct, title, imageUrl, description, price, addToCart}){
    const routeId = useParams().id
    useEffect(() => {
        getProduct(routeId)
    },   [getProduct, routeId])

    // handles my onclick button 
    function handleClick(){
        addToCart({product_id:routeId})
    }
    
    return  <div className="show">
        <h1>{title}</h1>
        <img src={imageUrl} alt={title}/>
        <p>{description}</p>
        <h3>${price}</h3>
        <Link to={`/products/${parseInt(routeId) + 1}`}><button>Next</button></Link>
        <Link to='/cart' onClick={handleClick}><button>ADD TO CART</button></Link>
        {/* <Transactions/> */}
    </div>
}

const mapStateToProps = (state) => {
    return {...state.selectedProduct}
}

export default connect(mapStateToProps,{getProduct, addToCart})(ProductShow)
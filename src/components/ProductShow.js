import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProduct } from '../redux/actionCreators'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ProductShow({getProduct}){
    const routeId = useParams().id
    useEffect(() => {
        getProduct(routeId)
    },     [getProduct, routeId])
    
    return  <div>
        <h1>You're in the show page</h1>
        <Link to={`/products/${parseInt(routeId) + 1}`}>Next</Link>
    </div>
}

export default connect(null, {getProduct})(ProductShow)
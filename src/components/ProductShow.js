import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProduct } from '../redux/actionCreators'
import { useEffect } from 'react'

function ProductShow({getProduct}){
    const routeId = useParams().id
    useEffect(() => {
        getProduct(routeId)
    },     [getProduct, routeId])
    
    return <h1>You're in the show page</h1>
}

export default connect(null, {getProduct})(ProductShow)
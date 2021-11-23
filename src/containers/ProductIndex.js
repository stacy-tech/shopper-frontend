import { useEffect } from "react"
import {getProducts} from '../redux/actionCreators'
import { connect } from 'react-redux'

function ProductIndex({getProducts, products}){
    useEffect(() => products.length === 0 && getProducts(), [products])
    

 return<h1>Products</h1>
}

const mapStateToProps = (state) => {
    return {products: state.products}
}

export default connect(mapStateToProps, { getProducts })(ProductIndex)

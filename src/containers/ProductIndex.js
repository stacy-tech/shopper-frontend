import { useEffect } from "react"
import {getProducts} from '../redux/actionCreators'
import { connect } from 'react-redux'
import ProductCard from "../components/ProductCard"

function ProductIndex({getProducts, products}){
    useEffect(() => products.length === 0 && getProducts(), [products])
    

 return <div className="cards">
     {products.map(product => <ProductCard {...product} key={product.id} />)}
 </div>
}

const mapStateToProps = (state) => {
    return {products: state.products}
}

export default connect(mapStateToProps, { getProducts })(ProductIndex)

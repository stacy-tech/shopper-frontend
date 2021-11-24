import { useEffect } from "react"
import {getProducts} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { ProductCard }from "../components"

function ProductIndex({getProducts, products}){
    useEffect(getProducts, [getProducts])
    

 return <div className="cards">
     {products.map(product => <ProductCard {...product} key={product.id}/>)}
 </div>
}

const mapStateToProps = (state) => {
    return {products: state.products}
}

export default connect(mapStateToProps, { getProducts })(ProductIndex)

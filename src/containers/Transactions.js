import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import { connect } from 'react-redux'
import { TransactionCart } from '../components'


function Transactions({transactions}){
    return{

    }

}




const mapStateToProps = (state) => ({transactions: state.selectedProduct.transactions})

export default connect(mapStateToProps)(Transactions)
import { connect } from 'react-redux'
import { React } from 'react'

const TransactionCart=(props) => {
    // (props.transactions.map(tran => tran.title)}
    return(
       <div> {props.transactions.map(tran => 
            <p>{tran.title}</p>)}
        </div>
    )
       

}

const mapStateToProps = (state) => ({
    transactions:state.user.transactions

})

export default connect(mapStateToProps)(TransactionCart)
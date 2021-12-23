import { connect } from "react-redux";
import { React, useEffect } from "react";
// import { Transactions } from ".";
import { removeFromCart, loadCart } from "../redux/actionCreators";
import StripeCheckout from "react-stripe-checkout";

/**
 * @typedef {{}} TransactionProduct
 * @param {{transactions: TransactionProduct[]}} props
 * @returns
 */
function TransactionCart(props) {
  useEffect(()=> {
    props.loadCart()
    // eslint-disable-next-line
  },[])

  function handleToken(token, addresses) {
    console.log({ token, addresses });
  }

  function handleRemove(product_id) {
    console.log("removing from cart", product_id);
    props.removeFromCart(product_id).then(()=> props.loadCart());;
  }

  const getProductMarkup = (product_item) => {
    return (
      <div key={product_item.id} className="card-item d-flex">
        <div className="card-img">
          <img
            src={product_item.product.image_url}
            alt={product_item.product.title}
            key={product_item.id}
          />
        </div>

        <div className="card-details d-flex flex-column gap-1">
          <div className="product-category">Apparel</div>
          <div className="product-name">{product_item.product.title}</div>
          <div className="product-price">${product_item.product.price}</div>

          <div className="card-actions">
            <button
              className="btn-remove-transactionproduct"
              onClick={() => handleRemove(product_item.id)}
            >
              REMOVE FROM CART
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderTransactions = (transactions) => {
    if (!transactions || !transactions.length) {
      return <div>You have no transactions</div>;
    }

    return (
      <div className="cart-items d-flex flex-column gap-3">
        {props.transactions.map(getProductMarkup)}
      </div>
    );
  };
  return (
    <div className="row">
      <div className="column"></div>

      {renderTransactions(props.transactions)} 

      <StripeCheckout
        StripeKey="pk_test_51K2T4sAjf6lZXe5wt7jDtDUQW9SEM7txJyD3PCm7weZ2kyn55lRIszFN9eqlE0A5Z9pMUNXS5NafJQD7aG5x1aoz00zI23Kr71"
        token={handleToken}
      />
    </div>
  );
}


const mapStateToProps = (state) => ({
  transactions: state.user.transactions,
});


export default connect(mapStateToProps, { removeFromCart, loadCart })(
  TransactionCart
);

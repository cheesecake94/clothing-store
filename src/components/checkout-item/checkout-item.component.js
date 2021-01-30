import { connect } from 'react-redux';
import './checkout-item.component.scss';

import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  return <div className="checkout-item">
    <div className="image-container">
      <img src={cartItem.imageUrl} alt="item" />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
      <span className="value">{cartItem.quantity}</span>
      <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
    </span>
    <span className="price">{cartItem.price}</span>
    <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
  </div>
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
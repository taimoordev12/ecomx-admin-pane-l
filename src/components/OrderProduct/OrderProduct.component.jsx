import React from 'react';
import '../OrderProduct/OrderProduct.style.css';

const OrderProduct=({ imageUrl, price, name, quantity  })=> {
    return (
        <div className="cart-item">
      <img src={imageUrl} alt="image" className="img" />
  
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
    )
}

export default OrderProduct;

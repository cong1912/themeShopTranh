import React from "react";

function Nav() {
  return (
    <div className="breadcrumb">
      <div className="container">
        <h2>
          Shop <span>Cart</span>
        </h2>
        <div className="user-summary">
          <div className="account-links">
            <a href="#">My Account</a>
            <a href="#">Checkout</a>
          </div>
          <div className="cart-count">
            <a href="#">Shopping Bag: 0 items</a>
            <a href="#">($0.00)</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

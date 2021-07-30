import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Nav from "../components/Nav";

function Cart() {
  return (
    <Layout>
      <div id="main">
        <Nav />
        <section id="primary" className="content-full-width">
          <div className="container">
            <div className="woocommerce">
              <form action="#" method="post">
                <table className="shop_table cart">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="cart_table_item">
                      <td className="product-thumbnail">
                        <a href="shop-detail.html">
                          <img
                            src="images\top-product1.jpg"
                            className="attachment-shop_thumbnail wp-post-image"
                            alt="T_7_front"
                          />
                        </a>
                      </td>

                      <td className="product-name">
                        <h6>
                          <a href="shop-detail.html">Secret To Creativity</a>
                        </h6>
                      </td>

                      <td className="product-price">
                        <span className="amount">
                          <i className="fa fa-gbp"></i> 150
                        </span>
                      </td>

                      <td className="product-quantity">
                        <div className="quantity">
                          <input type="button" className="minus" value="-" />
                          <input
                            type="number"
                            name="quantity"
                            step="1"
                            value="1"
                            min="1"
                            title="Qty"
                            className="input-text qty text"
                          />
                          <input type="button" className="plus" value="+" />
                        </div>
                      </td>

                      <td className="product-subtotal">
                        <span className="amount">
                          <i className="fa fa-gbp"></i> 150
                        </span>
                      </td>

                      <td className="product-remove">
                        <a href="#" className="remove" title="Remove this item">
                          &times;
                        </a>
                      </td>
                    </tr>
                    <tr className="cart_table_item">
                      <td className="product-thumbnail">
                        <a href="shop-detail.html">
                          <img
                            src="images\top-product2.jpg"
                            className="attachment-shop_thumbnail wp-post-image"
                            alt="T_7_front"
                          />
                        </a>
                      </td>

                      <td className="product-name">
                        <h6>
                          <a href="shop-detail.html">Lonely in Rain</a>
                        </h6>
                      </td>

                      <td className="product-price">
                        <span className="amount">
                          <i className="fa fa-gbp"></i> 175
                        </span>
                      </td>

                      <td className="product-quantity">
                        <div className="quantity">
                          <input type="button" className="minus" value="-" />
                          <input
                            type="number"
                            name="quantity"
                            step="1"
                            value="1"
                            min="1"
                            title="Qty"
                            className="input-text qty text"
                          />
                          <input type="button" className="plus" value="+" />
                        </div>
                      </td>

                      <td className="product-subtotal">
                        <span className="amount">
                          <i className="fa fa-gbp"></i> 175
                        </span>
                      </td>

                      <td className="product-remove">
                        <a href="#" className="remove" title="Remove this item">
                          &times;
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input
                  type="submit"
                  className="button"
                  name="continue"
                  value="Continue Shopping"
                />
              </form>
              <div className="cart-collaterals">
                <div className="coupon">
                  <h3>Coupon</h3>
                  <form action="#" method="post">
                    <label for="coupon_code">Enter Coupon Code</label>
                    <input
                      name="coupon_code"
                      className="input-text"
                      id="coupon_code"
                      value=""
                      placeholder="Enter Code"
                    />
                    <input
                      type="submit"
                      value="Apply Coupon"
                      name="apply_coupon"
                      className="button"
                    />
                  </form>
                </div>
                <div className="cart_totals">
                  <h3>Cart Totals</h3>
                  <table>
                    <tbody>
                      <tr className="cart-subtotal">
                        <th>Cart Subtotal</th>
                        <td>
                          <span className="amount">
                            <i className="fa fa-gbp"></i> 150
                          </span>
                        </td>
                      </tr>
                      <tr className="shipping">
                        <th>Shipping</th>
                        <td>
                          Free Shipping
                          <input
                            type="hidden"
                            name="shipping_method"
                            id="shipping_method"
                            value="free_shipping"
                          />
                        </td>
                      </tr>
                      <tr className="total">
                        <th>Order Price Total</th>
                        <td>
                          <strong>
                            <span className="amount">
                              <i className="fa fa-gbp"></i> 150
                            </span>
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a
                    className="dt-sc-button medium type2 with-icon"
                    href="shop-checkout.html"
                  >
                    <i className="fa fa-shopping-cart"></i>{" "}
                    <span> Proceed to Checkout </span>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="dt-sc-hr-invisible-small"></div>
        </section>
        <Footer />
      </div>
    </Layout>
  );
}

export default Cart;

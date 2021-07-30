import React from "react";
import Layout from "../components/Layout";

function Cart() {
  return (
    <Layout>
      <div id="main">
        <div class="breadcrumb">
          <div class="container">
            <h2>
              Shop <span>Cart</span>
            </h2>
            <div class="user-summary">
              <div class="account-links">
                <a href="#">My Account</a>
                <a href="#">Checkout</a>
              </div>
              <div class="cart-count">
                <a href="#">Shopping Bag: 0 items</a>
                <a href="#">($0.00)</a>
              </div>
            </div>
          </div>
        </div>
        <section id="primary" class="content-full-width">
          <div class="container">
            <div class="woocommerce">
              <form action="#" method="post">
                <table class="shop_table cart">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">Image</th>
                      <th class="product-name">Product</th>
                      <th class="product-price">Price</th>
                      <th class="product-quantity">Quantity</th>
                      <th class="product-subtotal">Total</th>
                      <th class="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="cart_table_item">
                      <td class="product-thumbnail">
                        <a href="shop-detail.html">
                          <img
                            src="images\top-product1.jpg"
                            class="attachment-shop_thumbnail wp-post-image"
                            alt="T_7_front"
                          />
                        </a>
                      </td>

                      <td class="product-name">
                        <h6>
                          <a href="shop-detail.html">Secret To Creativity</a>
                        </h6>
                      </td>

                      <td class="product-price">
                        <span class="amount">
                          <i class="fa fa-gbp"></i> 150
                        </span>
                      </td>

                      <td class="product-quantity">
                        <div class="quantity">
                          <input type="button" class="minus" value="-" />
                          <input
                            type="number"
                            name="quantity"
                            step="1"
                            value="1"
                            min="1"
                            title="Qty"
                            class="input-text qty text"
                          />
                          <input type="button" class="plus" value="+" />
                        </div>
                      </td>

                      <td class="product-subtotal">
                        <span class="amount">
                          <i class="fa fa-gbp"></i> 150
                        </span>
                      </td>

                      <td class="product-remove">
                        <a href="#" class="remove" title="Remove this item">
                          &times;
                        </a>
                      </td>
                    </tr>
                    <tr class="cart_table_item">
                      <td class="product-thumbnail">
                        <a href="shop-detail.html">
                          <img
                            src="images\top-product2.jpg"
                            class="attachment-shop_thumbnail wp-post-image"
                            alt="T_7_front"
                          />
                        </a>
                      </td>

                      <td class="product-name">
                        <h6>
                          <a href="shop-detail.html">Lonely in Rain</a>
                        </h6>
                      </td>

                      <td class="product-price">
                        <span class="amount">
                          <i class="fa fa-gbp"></i> 175
                        </span>
                      </td>

                      <td class="product-quantity">
                        <div class="quantity">
                          <input type="button" class="minus" value="-" />
                          <input
                            type="number"
                            name="quantity"
                            step="1"
                            value="1"
                            min="1"
                            title="Qty"
                            class="input-text qty text"
                          />
                          <input type="button" class="plus" value="+" />
                        </div>
                      </td>

                      <td class="product-subtotal">
                        <span class="amount">
                          <i class="fa fa-gbp"></i> 175
                        </span>
                      </td>

                      <td class="product-remove">
                        <a href="#" class="remove" title="Remove this item">
                          &times;
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input
                  type="submit"
                  class="button"
                  name="continue"
                  value="Continue Shopping"
                />
              </form>
              <div class="cart-collaterals">
                <div class="coupon">
                  <h3>Coupon</h3>
                  <form action="#" method="post">
                    <label for="coupon_code">Enter Coupon Code</label>
                    <input
                      name="coupon_code"
                      class="input-text"
                      id="coupon_code"
                      value=""
                      placeholder="Enter Code"
                    />
                    <input
                      type="submit"
                      value="Apply Coupon"
                      name="apply_coupon"
                      class="button"
                    />
                  </form>
                </div>
                <div class="cart_totals">
                  <h3>Cart Totals</h3>
                  <table>
                    <tbody>
                      <tr class="cart-subtotal">
                        <th>Cart Subtotal</th>
                        <td>
                          <span class="amount">
                            <i class="fa fa-gbp"></i> 150
                          </span>
                        </td>
                      </tr>
                      <tr class="shipping">
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
                      <tr class="total">
                        <th>Order Price Total</th>
                        <td>
                          <strong>
                            <span class="amount">
                              <i class="fa fa-gbp"></i> 150
                            </span>
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a
                    class="dt-sc-button medium type2 with-icon"
                    href="shop-checkout.html"
                  >
                    <i class="fa fa-shopping-cart"></i>{" "}
                    <span> Proceed to Checkout </span>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="dt-sc-hr-invisible-small"></div>
        </section>
        <footer
          id="footer"
          class="animate"
          data-animation="fadeIn"
          data-delay="100"
        >
          <div class="container">
            <div class="copyright">
              <ul class="footer-links">
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Faq</a>
                </li>
              </ul>
              <ul class="payment-options">
                <li>
                  <a href="#" class="fa fa-cc-amex"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-cc-mastercard"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-cc-visa"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-cc-discover"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-cc-paypal"></a>
                </li>
              </ul>
              <p>
                © 2015 <a href="#">RED ART</a>. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
}

export default Cart;

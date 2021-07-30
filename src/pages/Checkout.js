import React from "react";
import Layout from "../components/Layout";

function Checkout() {
  return (
    <Layout>
      <div id="main">
        <div class="breadcrumb">
          <div class="container">
            <h2>
              Shop <span>Checkout</span>
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
              <form name="checkout" method="post" class="checkout" action="#">
                <div class="col2-set" id="customer_details">
                  <div class="col-1">
                    <div class="woocommerce-billing-fields">
                      <h3>Billing Address</h3>

                      <div class="woocommerce-info">
                        Already registered?
                        <a href="#" class="showlogin">
                          Click here to login
                        </a>
                      </div>

                      <div class="login" style={{ display: "none" }}>
                        <p>
                          If you have shopped with us before, please enter your
                          details in the boxes below. If you are a new customer
                          please proceed to the Billing &amp; Shipping section.
                        </p>
                        <p class="form-row form-row-first">
                          <label for="username">
                            Username or email <span class="required">*</span>
                          </label>
                          <input
                            type="text"
                            class="input-text"
                            name="username"
                            id="username"
                          />
                        </p>
                        <p class="form-row form-row-last">
                          <label for="password">
                            Password <span class="required">*</span>
                          </label>
                          <input
                            class="input-text"
                            type="password"
                            name="password"
                            id="password"
                          />
                        </p>
                        <div class="clear"></div>
                        <p class="form-row">
                          <input
                            type="hidden"
                            id="_wpnonce"
                            name="_wpnonce"
                            value="267b4213a5"
                          />
                          <input
                            type="hidden"
                            name="_wp_http_referer"
                            value=""
                          />{" "}
                          <input
                            type="submit"
                            class="button"
                            name="login"
                            value="Login"
                          />
                          <input type="hidden" name="redirect" value="" />
                          <label for="rememberme" class="inline">
                            <input
                              name="rememberme"
                              type="checkbox"
                              id="rememberme"
                              value="forever"
                            />{" "}
                            Remember me
                          </label>
                        </p>
                        <p class="lost_password">
                          <a href="#">Lost your password?</a>
                        </p>
                        <div class="clear"></div>
                      </div>
                      <p
                        class="form-row form-row-wide address-field update_totals_on_change validate-required"
                        id="billing_country_field"
                      >
                        <p
                          class="form-row form-row-first validate-required"
                          id="billing_first_name_field"
                        >
                          <label for="billing_first_name" class="">
                            First Name *
                          </label>
                          <input
                            type="text"
                            class="input-text "
                            name="billing_first_name"
                            id="billing_first_name"
                            placeholder=""
                            value=""
                            required=""
                          />
                        </p>
                        <p
                          class="form-row form-row-last validate-required"
                          id="billing_last_name_field"
                        >
                          <label for="billing_last_name" class="">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            class="input-text "
                            name="billing_last_name"
                            id="billing_last_name"
                            placeholder=""
                            value=""
                            required=""
                          />
                        </p>
                        <div class="clear"></div>
                        <p
                          class="form-row form-row-wide"
                          id="billing_company_field"
                        >
                          <label for="billing_company" class="">
                            Company Name
                          </label>
                          <input
                            type="text"
                            class="input-text "
                            name="billing_company"
                            id="billing_company"
                            placeholder=""
                            value=""
                            required=""
                          />
                        </p>
                        <p
                          class="form-row form-row-wide address-field validate-required"
                          id="billing_address_1_field"
                        >
                          <label for="billing_address_1" class="">
                            Address1
                          </label>
                          <input
                            type="text"
                            class="input-text "
                            name="billing_address_1"
                            id="billing_address_1"
                            placeholder="Street Name"
                            value=""
                          />
                        </p>
                        <p
                          class="form-row form-row-wide address-field"
                          id="billing_address_2_field"
                        >
                          <label for="billing_address_2" class="">
                            Address2
                          </label>
                          <input
                            type="text"
                            class="input-text "
                            name="billing_address_2"
                            id="billing_address_2"
                            placeholder="Apartment Name, No.. etc."
                            value=""
                          />
                        </p>
                        <div class="form-row form-row-wide address-field validate-required">
                          <label>State </label>
                          <div class="selection-box">
                            <select name="billing_city" class="shop-dropdown">
                              <option value="-1" selected="">
                                -- Select State --
                              </option>
                              <option value="AN" class="fa fa-car">
                                Andhra
                              </option>
                              <option value="TN" class="fa fa-bus">
                                Tamil Nadu
                              </option>
                              <option value="KL" class="fa fa-motorcycle">
                                Kerala
                              </option>
                              <option value="KN" class="fa fa-train">
                                Karnataka
                              </option>
                              <option value="PB" class="fa fa-truck">
                                Punjab
                              </option>
                            </select>
                          </div>
                          <noscript>
                            <input
                              type="submit"
                              name="woocommerce_checkout_update_totals"
                              value="Update country"
                            />
                          </noscript>
                        </div>
                        <p
                          class="form-row form-row-first address-field validate-state"
                          id="billing_state_field"
                        >
                          <label>Town / City *</label>
                          <input
                            type="text"
                            class="input-text "
                            value=""
                            placeholder="Town / City"
                            name="billing_state"
                          />
                        </p>
                        <p
                          class="form-row form-row-last address-field validate-required validate-postcode"
                          id="billing_postcode_field"
                        />
                        <label for="billing_postcode" class="">
                          Postcode *
                        </label>
                        <input
                          type="text"
                          class="input-text "
                          name="billing_postcode"
                          id="billing_postcode"
                          placeholder="Postcode / Zip"
                          value=""
                        />
                      </p>
                      <div class="clear"></div>
                      <p
                        class="form-row form-row-first validate-required validate-email"
                        id="billing_email_field"
                      >
                        <label for="billing_email" class="">
                          Email Address *
                        </label>
                        <input
                          type="text"
                          class="input-text "
                          name="billing_email"
                          id="billing_email"
                          placeholder="Enter email"
                          value=""
                        />
                      </p>
                      <p
                        class="form-row form-row-last validate-required validate-phone"
                        id="billing_phone_field"
                      >
                        <label for="billing_phone" class="">
                          Phone *{" "}
                        </label>
                        <input
                          type="text"
                          class="input-text "
                          name="billing_phone"
                          id="billing_phone"
                          placeholder="Enter Phone"
                          value=""
                        />
                      </p>
                      <div class="clear"></div>
                      <p class="form-row form-row-wide create-account">
                        <input
                          class="input-checkbox"
                          id="createaccount"
                          type="checkbox"
                          name="createaccount"
                          value="1"
                        />
                        <label for="createaccount" class="checkbox">
                          {" "}
                          <span></span> Create an account?
                        </label>
                      </p>
                      <div class="create-account">
                        <p>
                          Create an account by entering the information below.
                          If you are a returning customer please login at the
                          top of the page.
                        </p>
                        <p
                          class="form-row validate-required"
                          id="account_password_field"
                        >
                          <label for="account_password" class="">
                            Account password *
                          </label>
                          <input
                            type="password"
                            class="input-text "
                            name="account_password"
                            id="account_password"
                            placeholder="Password"
                            value=""
                          />
                        </p>
                        <div class="clear"></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-2">
                    <div class="woocommerce-shipping-fields">
                      <h3>Shipping Address</h3>
                      <p id="ship-to-different-address">
                        <input
                          id="ship-to-different-address-checkbox"
                          class="input-checkbox"
                          checked="checked"
                          type="checkbox"
                          name="ship_to_different_address"
                          value="1"
                        />
                        <label
                          for="ship-to-different-address-checkbox"
                          class="checkbox"
                        >
                          <span></span>Ship to Billing Address
                        </label>
                      </p>

                      <div class="shipping_address">
                        <div
                          class="form-row form-row-wide address-field update_totals_on_change validate-required"
                          id="shipping_country_field"
                        >
                          <label for="shipping_country" class="">
                            Country *
                          </label>
                          <div class="selection-box">
                            <select
                              name="shipping_country"
                              id="shipping_country"
                              class="shop-dropdown"
                            >
                              <option value="-1" selected="">
                                Select a country&hellip;
                              </option>
                              <option value="AL" class="fa fa-tree">
                                Alaska
                              </option>
                              <option value="AF" class="fa fa-train">
                                Afghanistan
                              </option>
                              <option value="AL" class="fa fa-plane">
                                Albania
                              </option>
                              <option value="DZ" class="fa fa-subway">
                                Algeria
                              </option>
                              <option value="AQ" class="fa fa-ship">
                                Antarctica
                              </option>
                            </select>
                          </div>
                          <noscript>
                            <input
                              type="submit"
                              name="woocommerce_checkout_update_totals"
                              value="Update country"
                            />
                          </noscript>
                        </div>
                        <p
                          class="form-row form-row-first validate-required"
                          id="shipping_first_name_field"
                        >
                          <label for="shipping_first_name" class="">
                            First Name *
                          </label>
                          <input
                            type="text"
                            class="input-text "
                            name="shipping_first_name"
                            id="shipping_first_name"
                            placeholder=""
                            value=""
                          />
                        </p>
                        <p
                          class="form-row form-row-last validate-required"
                          id="shipping_last_name_field"
                        >
                          <label for="shipping_last_name" class="">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            class="input-text "
                            name="shipping_last_name"
                            id="shipping_last_name"
                            placeholder=""
                            value=""
                          />
                        </p>
                        <div class="clear"></div>
                        <p
                          class="form-row form-row-wide"
                          id="shipping_company_field"
                        >
                          <label for="shipping_company" class="">
                            Company Name
                          </label>
                          <input
                            type="text"
                            class="input-text "
                            name="shipping_company"
                            id="shipping_company"
                            placeholder=""
                            value=""
                          />
                        </p>
                        <p
                          class="form-row form-row-wide address-field validate-required"
                          id="shipping_address_1_field"
                        >
                          <label for="shipping_address_1" class="">
                            Address 1
                          </label>
                          <input
                            type="text"
                            class="input-text "
                            name="shipping_address_1"
                            id="shipping_address_1"
                            placeholder="Street Name"
                            value=""
                          />
                        </p>
                        <p
                          class="form-row form-row-wide address-field"
                          id="shipping_address_2_field"
                        >
                          <label for="shipping_address_2" class="">
                            Address 2
                          </label>
                          <input
                            type="text"
                            class="input-text"
                            name="shipping_address_2"
                            id="shipping_address_2"
                            placeholder="Apartment Name, No.. etc"
                            value=""
                          />
                        </p>
                        <p
                          class="form-row form-row-wide address-field validate-state"
                          id="shipping_state_field"
                        >
                          <label for="shipping_state" class="">
                            County{" "}
                          </label>
                          <input
                            type="text"
                            class="input-text "
                            name=" shipping_state"
                            placeholder="State / County"
                            value=""
                            id="shipping_state"
                          />
                        </p>
                        <p
                          class="form-row form-row-first address-field validate-required"
                          id="shipping_city_field"
                        >
                          <label>Town / City *</label>
                          <input
                            type="text"
                            class="input-text "
                            value=""
                            placeholder="Town / City"
                            name="shipping_state"
                          />
                        </p>
                        <p
                          class="form-row form-row-last address-field validate-required validate-postcode"
                          id="shipping_postcode_field"
                        >
                          <label for="shipping_postcode" class="">
                            Postcode *
                          </label>
                          <input
                            type="text"
                            class="input-text "
                            name="shipping_postcode"
                            id="shipping_postcode"
                            placeholder="Postcode / Zip"
                            value=""
                          />
                        </p>
                        <div class="clear"></div>
                      </div>
                      <p class="form-row notes" id="order_comments_field">
                        <label for="order_comments" class="">
                          Optional Message
                        </label>
                        <textarea
                          name="order_comments"
                          class="input-text "
                          id="order_comments"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          rows="2"
                          cols="5"
                        ></textarea>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="dt-sc-margin50"></div>
                <h3 id="order_review_heading">Order Review &amp; Payment</h3>
                <div id="order_review">
                  <table class="shop_table cart">
                    <thead>
                      <tr>
                        <th class="product-thumbnail">Image</th>
                        <th class="product-name">Product</th>
                        <th class="product-price">Price</th>
                        <th class="product-quantity">Quantity</th>
                        <th class="product-subtotal">Total</th>
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
                      </tr>
                    </tbody>
                  </table>

                  <div class="cart-collaterals">
                    <div class="coupon">
                      <h3>Coupon</h3>
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
                    </div>
                    <div class="cart_totals">
                      <h3>Cart Totals</h3>
                      <table>
                        <tbody>
                          <tr class="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td>
                              <span class="amount">
                                <i class="fa fa-gbp"></i> 375
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
                                  <i class="fa fa-gbp"></i> 375
                                </span>
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="payment">
                    <ul class="payment_methods methods">
                      <li class="payment_method_bacs">
                        <input
                          id="payment_method_bacs"
                          type="radio"
                          class="input-radio"
                          name="payment_method"
                          value="bacs"
                          checked="checked"
                          data-order_button_text=""
                        />
                        <label for="payment_method_bacs">
                          <span></span>Direct Bank Transfer{" "}
                        </label>
                        <div class="payment_box payment_method_bacs">
                          <p>
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order won&#8217;t be shipped until the funds
                            have cleared in our account.
                          </p>{" "}
                        </div>
                      </li>
                      <li class="payment_method_cheque">
                        <input
                          id="payment_method_cheque"
                          type="radio"
                          class="input-radio"
                          name="payment_method"
                          value="cheque"
                          data-order_button_text=""
                        />
                        <label for="payment_method_cheque">
                          <span></span>Cheque Payment{" "}
                        </label>
                        <div
                          class="payment_box payment_method_cheque"
                          style={{ display: "none" }}
                        >
                          <p>
                            Please send your cheque to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>{" "}
                        </div>
                      </li>
                      <li class="payment_method_paypal">
                        <input
                          id="payment_method_paypal"
                          type="radio"
                          class="input-radio"
                          name="payment_method"
                          value="paypal"
                          data-order_button_text="Proceed to PayPal"
                        />
                        <label for="payment_method_paypal">
                          <span></span>PayPal{" "}
                          <img src="images\paypal.png" alt="PayPal" />
                        </label>
                        <div
                          class="payment_box payment_method_paypal"
                          style={{ display: "none" }}
                        >
                          <p>
                            Pay via PayPal; you can pay with your credit card if
                            you don&#8217;t have a PayPal account
                          </p>{" "}
                        </div>
                      </li>
                    </ul>
                    <div class="form-row place-order">
                      <noscript>
                        Since your browser does not support JavaScript, or it is
                        disabled, please ensure you click the{" "}
                        <em>Update Totals</em> button before placing your order.
                        You may be charged more than the amount stated above if
                        you fail to do so.
                        <input
                          type="submit"
                          class="button alt"
                          name="woocommerce_checkout_update_totals"
                          value="Update totals"
                        />
                      </noscript>
                      <input type="hidden" name="_wpnonce" value="127d0e67e3" />
                      <input type="hidden" name="_wp_http_referer" value="" />
                      <input
                        type="submit"
                        class="button alt"
                        name="woocommerce_checkout_place_order"
                        id="place_order"
                        value="Place order"
                        data-value="Place order"
                      />
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
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

export default Checkout;

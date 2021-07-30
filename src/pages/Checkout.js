import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Nav from "../components/Nav";

function Checkout() {
  return (
    <Layout>
      <div id="main">
        <Nav />
        <section id="primary" className="content-full-width">
          <div className="container">
            <div className="woocommerce">
              <form
                name="checkout"
                method="post"
                className="checkout"
                action="#"
              >
                <div className="col2-set" id="customer_details">
                  <div className="col-1">
                    <div className="woocommerce-shipping-fields">
                      <h3>Shipping Address</h3>
                      <p id="ship-to-different-address">
                        <input
                          id="ship-to-different-address-checkbox"
                          className="input-checkbox"
                          checked="checked"
                          type="checkbox"
                          name="ship_to_different_address"
                          value="1"
                        />
                        <label
                          for="ship-to-different-address-checkbox"
                          className="checkbox"
                        >
                          <span></span>Ship to Billing Address
                        </label>
                      </p>

                      <div className="shipping_address">
                        <div
                          className="form-row form-row-wide address-field update_totals_on_change validate-required"
                          id="shipping_country_field"
                        >
                          <label for="shipping_country" className="">
                            Country *
                          </label>
                          <div className="selection-box">
                            <select
                              name="shipping_country"
                              id="shipping_country"
                              className="shop-dropdown"
                            >
                              <option value="-1" selected="">
                                Select a country&hellip;
                              </option>
                              <option value="AL" className="fa fa-tree">
                                Alaska
                              </option>
                              <option value="AF" className="fa fa-train">
                                Afghanistan
                              </option>
                              <option value="AL" className="fa fa-plane">
                                Albania
                              </option>
                              <option value="DZ" className="fa fa-subway">
                                Algeria
                              </option>
                              <option value="AQ" className="fa fa-ship">
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
                          className="form-row form-row-first validate-required"
                          id="shipping_first_name_field"
                        >
                          <label for="shipping_first_name" className="">
                            First Name *
                          </label>
                          <input
                            type="text"
                            className="input-text "
                            name="shipping_first_name"
                            id="shipping_first_name"
                            placeholder=""
                            value=""
                          />
                        </p>
                        <p
                          className="form-row form-row-last validate-required"
                          id="shipping_last_name_field"
                        >
                          <label for="shipping_last_name" className="">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            className="input-text "
                            name="shipping_last_name"
                            id="shipping_last_name"
                            placeholder=""
                            value=""
                          />
                        </p>
                        <div className="clear"></div>
                        <p
                          className="form-row form-row-wide"
                          id="shipping_company_field"
                        >
                          <label for="shipping_company" className="">
                            Company Name
                          </label>
                          <input
                            type="text"
                            className="input-text "
                            name="shipping_company"
                            id="shipping_company"
                            placeholder=""
                            value=""
                          />
                        </p>
                        <p
                          className="form-row form-row-wide address-field validate-required"
                          id="shipping_address_1_field"
                        >
                          <label for="shipping_address_1" className="">
                            Address 1
                          </label>
                          <input
                            type="text"
                            className="input-text "
                            name="shipping_address_1"
                            id="shipping_address_1"
                            placeholder="Street Name"
                            value=""
                          />
                        </p>
                        <p
                          className="form-row form-row-wide address-field"
                          id="shipping_address_2_field"
                        >
                          <label for="shipping_address_2" className="">
                            Address 2
                          </label>
                          <input
                            type="text"
                            className="input-text"
                            name="shipping_address_2"
                            id="shipping_address_2"
                            placeholder="Apartment Name, No.. etc"
                            value=""
                          />
                        </p>
                        <p
                          className="form-row form-row-wide address-field validate-state"
                          id="shipping_state_field"
                        >
                          <label for="shipping_state" className="">
                            County{" "}
                          </label>
                          <input
                            type="text"
                            className="input-text "
                            name=" shipping_state"
                            placeholder="State / County"
                            value=""
                            id="shipping_state"
                          />
                        </p>
                        <p
                          className="form-row form-row-first address-field validate-required"
                          id="shipping_city_field"
                        >
                          <label>Town / City *</label>
                          <input
                            type="text"
                            className="input-text "
                            value=""
                            placeholder="Town / City"
                            name="shipping_state"
                          />
                        </p>
                        <p
                          className="form-row form-row-last address-field validate-required validate-postcode"
                          id="shipping_postcode_field"
                        >
                          <label for="shipping_postcode" className="">
                            Postcode *
                          </label>
                          <input
                            type="text"
                            className="input-text "
                            name="shipping_postcode"
                            id="shipping_postcode"
                            placeholder="Postcode / Zip"
                            value=""
                          />
                        </p>
                        <div className="clear"></div>
                      </div>
                      <p className="form-row notes" id="order_comments_field">
                        <label for="order_comments" className="">
                          Optional Message
                        </label>
                        <textarea
                          name="order_comments"
                          className="input-text "
                          id="order_comments"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          rows="2"
                          cols="5"
                        ></textarea>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="dt-sc-margin50"></div>
                <h3 id="order_review_heading">Order Review &amp; Payment</h3>
                <div id="order_review">
                  <table className="shop_table cart">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
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
                      </tr>
                    </tbody>
                  </table>

                  <div className="cart-collaterals">
                    <div className="coupon">
                      <h3>Coupon</h3>
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
                    </div>
                    <div className="cart_totals">
                      <h3>Cart Totals</h3>
                      <table>
                        <tbody>
                          <tr className="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td>
                              <span className="amount">
                                <i className="fa fa-gbp"></i> 375
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
                                  <i className="fa fa-gbp"></i> 375
                                </span>
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Layout>
  );
}

export default Checkout;

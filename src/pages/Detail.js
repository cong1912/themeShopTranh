import React from "react";
import Layout from "../components/Layout";

function Detail() {
  return (
    <Layout>
      <div id="main">
        <div class="breadcrumb">
          <div class="container">
            <h2>
              Product <span>Detail</span>
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
            <div
              class="main-title animate"
              data-animation="pullDown"
              data-delay="100"
            >
              <h3> How Art Saved My Life </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <div class="cart-wrapper">
              <div class="dt-sc-three-fifth column first">
                <div class="cart-thumb">
                  <a href="#">
                    <img src="images\cart-product.jpg" alt="" title="Acrylic" />
                  </a>
                </div>
                <h5>more from this artist</h5>
                <ul class="thumblist">
                  <li>
                    <a href="#" class="product">
                      <img src="images\cart-thumb9.jpg" alt="" title="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img src="images\cart-thumb10.jpg" alt="" title="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img src="images\cart-thumb11.jpg" alt="" title="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img src="images\cart-thumb12.jpg" alt="" title="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img src="images\cart-thumb13.jpg" alt="" title="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img src="images\cart-thumb14.jpg" alt="" title="" />
                    </a>
                  </li>
                </ul>
                <div class="commententries">
                  <h4> Comments ( 3 ) </h4>
                  <h6>
                    <a href="#">
                      <i class="fa fa-comments-o"></i>Add Comments
                    </a>
                  </h6>
                  <ul class="commentlist">
                    <li>
                      <div class="comment">
                        <header class="comment-author">
                          <img
                            title=""
                            alt="image"
                            src="images\post-img1.jpg"
                          />
                        </header>
                        <div class="comment-details">
                          <div class="author-name">
                            <a href="#">Callahan James</a>
                          </div>
                          <div class="commentmetadata">
                            <span>/</span> Acrylic Painting
                          </div>
                          <div title="Rated 5.00 out of 5" class="star-rating">
                            <span style={{ width: "80%" }}></span>
                          </div>
                          <div class="comment-body">
                            <div class="comment-content">
                              <p>
                                The wise man therefore always holds in these
                                matters to this principle of selection: he
                                rejects pleasures to secure other greater
                                pleasures, or else he endures pains to avoid
                                worse pains.
                              </p>
                              <div class="author-metadata">
                                <p>
                                  <span class="fa fa-comments"></span>
                                  <a href="#"> 19 </a>
                                </p>
                                <p>
                                  <span class="fa fa-folder-open"> </span>
                                  <a href="#"> Art</a>
                                </p>
                                <p>
                                  <span class="fa fa-calendar"></span>
                                  <a href="#"> 05 Apr 2015 </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul class="children">
                        <li>
                          <div class="comment">
                            <header class="comment-author">
                              <img
                                title=""
                                alt="image"
                                src="images\post-img2.jpg"
                              />
                            </header>
                            <div class="comment-details">
                              <div class="author-name">
                                <a href="#">Sean Bean</a>
                              </div>
                              <div class="commentmetadata">
                                <span>/</span> Sculpture
                              </div>
                              <div
                                title="Rated 5.00 out of 5"
                                class="star-rating"
                              >
                                <span style={{ width: "70%" }}></span>
                              </div>
                              <div class="comment-body">
                                <div class="comment-content">
                                  <p>
                                    The wise man therefore always holds in these
                                    matters to this principle of selection: he
                                    rejects pleasures to secure other greater
                                    pleasures he rejects pleasures to secure
                                    other greater pleasures, or else he endures
                                    pains to avoid worse pains.
                                  </p>
                                  <div class="author-metadata">
                                    <p>
                                      <span class="fa fa-comments"></span>
                                      <a href="#"> 08 </a>
                                    </p>
                                    <p>
                                      <span class="fa fa-folder-open"> </span>
                                      <a href="#"> Creative</a>
                                    </p>
                                    <p>
                                      <span class="fa fa-calendar"></span>
                                      <a href="#"> 26 Aug 2015 </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="dt-sc-two-fifth column">
                <div class="post-author-details">
                  <div class="entry-author-image">
                    <img src="images\authour.png" alt="" title="" />
                  </div>
                  <div class="author-title">
                    <h5>
                      <a href="#">James Dean</a>
                    </h5>
                    <span>Garland, TX - United States</span>
                    <div class="woocommerce-product-rating">
                      <div title="Rated 4.40 out of 5" class="star-rating">
                        <span style={{ width: "85%" }}></span>
                      </div>
                      <a href="#">( 4 customer reviews )</a>
                    </div>
                  </div>
                  <div class="author-desc">
                    <p>
                      Remaining art are essentially unchanged. It was
                      popularised in the 1960s with a release of Latest sheets
                      containing passages, and more recently with desktop
                      publishing software.
                    </p>
                  </div>
                </div>

                <ul class="cart-thumb-categories">
                  <li>
                    <a href="#" class="product">
                      <img src="images\cart-thumb1.jpg" alt="" title="" />
                    </a>
                    <div class="category-details">
                      <h6>
                        <a href="#"> Canvas Print </a>{" "}
                      </h6>
                      <span> $25 </span>
                    </div>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img src="images\cart-thumb2.jpg" alt="" title="" />
                    </a>
                    <div class="category-details">
                      <h6>
                        <a href="#"> photogenic </a>{" "}
                      </h6>
                      <span> $30 </span>
                    </div>
                  </li>
                  <li class="last">
                    <a href="#" class="product">
                      <img src="images\cart-thumb3.jpg" alt="" title="" />
                    </a>
                    <div class="category-details">
                      <h6>
                        <a href="#"> Oil painting </a>{" "}
                      </h6>
                      <span> $28 </span>
                    </div>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img src="images\cart-thumb4.jpg" alt="" title="" />
                    </a>
                    <div class="category-details">
                      <h6>
                        <a href="#"> Acrylic Art </a>{" "}
                      </h6>
                      <span> $45 </span>
                    </div>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img src="images\cart-thumb5.jpg" alt="" title="" />
                    </a>
                    <div class="category-details">
                      <h6>
                        <a href="#"> Sketches </a>{" "}
                      </h6>
                      <span> $15 </span>
                    </div>
                  </li>
                  <li class="last">
                    <a href="#" class="product">
                      <img src="images\cart-thumb6.jpg" alt="" title="" />
                    </a>
                    <div class="category-details">
                      <h6>
                        <a href="#"> Dropper Art </a>{" "}
                      </h6>
                      <span> $20 </span>
                    </div>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img src="images\cart-thumb7.jpg" alt="" title="" />
                    </a>
                    <div class="category-details">
                      <h6>
                        <a href="#"> Sculpture </a>{" "}
                      </h6>
                      <span> $55 </span>
                    </div>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img src="images\cart-thumb8.jpg" alt="" title="" />
                    </a>
                    <div class="category-details">
                      <h6>
                        <a href="#"> Water Print </a>{" "}
                      </h6>
                      <span> $10 </span>
                    </div>
                  </li>
                </ul>
                <div class="project-details">
                  <ul class="client-details">
                    <li>
                      <p>
                        <span>Title :</span>Lonely in Rain
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Artist :</span>Jamie Fox
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Category :</span>Acrylic Painting
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Description :</span>This reminds me a gorgeous
                        moments.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Uploaded :</span>Nov 9th, 2014{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Statistics :</span>
                        <i class="fa fa-eye"></i>2,318
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Colors :</span>
                        <a href="#" class="yellow"></a>
                        <a href="#" class="green"></a>
                        <a href="#" class="orange"></a>
                        <a href="#" class="red"></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Sales Sheet :</span>PDF
                      </p>
                    </li>
                    <li>
                      <span>Tags :</span>
                      <div class="tagcloud type3">
                        <a href="#">Sketches</a>
                        <a href="#">Fashion</a>
                        <a href="#">Art</a>
                        <a href="#">Rain</a>
                        <a href="#">Scupture</a>
                        <a href="#">Lonely</a>
                        <a href="#">Oil color</a>
                        <a href="#">Gallery</a>
                        <a href="#">Mordern Art</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
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

export default Detail;

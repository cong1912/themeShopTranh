import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Nav from "../components/Nav";

function Detail() {
  return (
    <Layout>
      <div id="main">
        <Nav />
        <section id="primary" className="content-full-width">
          <div className="container">
            <div
              className="main-title animate"
              data-animation="pullDown"
              data-delay="100"
            >
              <h3> How Art Saved My Life </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <div className="cart-wrapper">
              <div className="dt-sc-three-fifth column first">
                <div className="cart-thumb">
                  <a href="#">
                    <img src="images\cart-product.jpg" alt="" title="Acrylic" />
                  </a>
                </div>
                <h5>more from this artist</h5>
                <ul className="thumblist">
                  <li>
                    <a href="#" className="product">
                      <img src="images\cart-thumb9.jpg" alt="" title="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="product">
                      <img src="images\cart-thumb10.jpg" alt="" title="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="product">
                      <img src="images\cart-thumb11.jpg" alt="" title="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="product">
                      <img src="images\cart-thumb12.jpg" alt="" title="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="product">
                      <img src="images\cart-thumb13.jpg" alt="" title="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="product">
                      <img src="images\cart-thumb14.jpg" alt="" title="" />
                    </a>
                  </li>
                </ul>
                <div className="commententries">
                  <h4> Comments ( 3 ) </h4>
                  <h6>
                    <a href="#">
                      <i className="fa fa-comments-o"></i>Add Comments
                    </a>
                  </h6>
                  <ul className="commentlist">
                    <li>
                      <div className="comment">
                        <header className="comment-author">
                          <img
                            title=""
                            alt="image"
                            src="images\post-img1.jpg"
                          />
                        </header>
                        <div className="comment-details">
                          <div className="author-name">
                            <a href="#">Callahan James</a>
                          </div>
                          <div className="commentmetadata">
                            <span>/</span> Acrylic Painting
                          </div>
                          <div
                            title="Rated 5.00 out of 5"
                            className="star-rating"
                          >
                            <span style={{ width: "80%" }}></span>
                          </div>
                          <div className="comment-body">
                            <div className="comment-content">
                              <p>
                                The wise man therefore always holds in these
                                matters to this principle of selection: he
                                rejects pleasures to secure other greater
                                pleasures, or else he endures pains to avoid
                                worse pains.
                              </p>
                              <div className="author-metadata">
                                <p>
                                  <span className="fa fa-comments"></span>
                                  <a href="#"> 19 </a>
                                </p>
                                <p>
                                  <span className="fa fa-folder-open"> </span>
                                  <a href="#"> Art</a>
                                </p>
                                <p>
                                  <span className="fa fa-calendar"></span>
                                  <a href="#"> 05 Apr 2015 </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="children">
                        <li>
                          <div className="comment">
                            <header className="comment-author">
                              <img
                                title=""
                                alt="image"
                                src="images\post-img2.jpg"
                              />
                            </header>
                            <div className="comment-details">
                              <div className="author-name">
                                <a href="#">Sean Bean</a>
                              </div>
                              <div className="commentmetadata">
                                <span>/</span> Sculpture
                              </div>
                              <div
                                title="Rated 5.00 out of 5"
                                className="star-rating"
                              >
                                <span style={{ width: "70%" }}></span>
                              </div>
                              <div className="comment-body">
                                <div className="comment-content">
                                  <p>
                                    The wise man therefore always holds in these
                                    matters to this principle of selection: he
                                    rejects pleasures to secure other greater
                                    pleasures he rejects pleasures to secure
                                    other greater pleasures, or else he endures
                                    pains to avoid worse pains.
                                  </p>
                                  <div className="author-metadata">
                                    <p>
                                      <span className="fa fa-comments"></span>
                                      <a href="#"> 08 </a>
                                    </p>
                                    <p>
                                      <span className="fa fa-folder-open">
                                        {" "}
                                      </span>
                                      <a href="#"> Creative</a>
                                    </p>
                                    <p>
                                      <span className="fa fa-calendar"></span>
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
              <div className="dt-sc-two-fifth column">
                <div className="post-author-details">
                  <div className="entry-author-image">
                    <img src="images\authour.png" alt="" title="" />
                  </div>
                  <div className="author-title">
                    <h5>
                      <a href="#">James Dean</a>
                    </h5>
                    <span>Garland, TX - United States</span>
                    <div className="woocommerce-product-rating">
                      <div title="Rated 4.40 out of 5" className="star-rating">
                        <span style={{ width: "85%" }}></span>
                      </div>
                      <a href="#">( 4 customer reviews )</a>
                    </div>
                  </div>
                  <div className="author-desc">
                    <p>
                      Remaining art are essentially unchanged. It was
                      popularised in the 1960s with a release of Latest sheets
                      containing passages, and more recently with desktop
                      publishing software.
                    </p>
                  </div>
                </div>

                <ul className="cart-thumb-categories">
                  <li>
                    <a href="#" className="product">
                      <img src="images\cart-thumb1.jpg" alt="" title="" />
                    </a>
                    <div className="category-details">
                      <h6>
                        <a href="#"> Canvas Print </a>{" "}
                      </h6>
                      <span> $25 </span>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="product">
                      <img src="images\cart-thumb2.jpg" alt="" title="" />
                    </a>
                    <div className="category-details">
                      <h6>
                        <a href="#"> photogenic </a>{" "}
                      </h6>
                      <span> $30 </span>
                    </div>
                  </li>
                  <li className="last">
                    <a href="#" className="product">
                      <img src="images\cart-thumb3.jpg" alt="" title="" />
                    </a>
                    <div className="category-details">
                      <h6>
                        <a href="#"> Oil painting </a>{" "}
                      </h6>
                      <span> $28 </span>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="product">
                      <img src="images\cart-thumb4.jpg" alt="" title="" />
                    </a>
                    <div className="category-details">
                      <h6>
                        <a href="#"> Acrylic Art </a>{" "}
                      </h6>
                      <span> $45 </span>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="product">
                      <img src="images\cart-thumb5.jpg" alt="" title="" />
                    </a>
                    <div className="category-details">
                      <h6>
                        <a href="#"> Sketches </a>{" "}
                      </h6>
                      <span> $15 </span>
                    </div>
                  </li>
                  <li className="last">
                    <a href="#" className="product">
                      <img src="images\cart-thumb6.jpg" alt="" title="" />
                    </a>
                    <div className="category-details">
                      <h6>
                        <a href="#"> Dropper Art </a>{" "}
                      </h6>
                      <span> $20 </span>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="product">
                      <img src="images\cart-thumb7.jpg" alt="" title="" />
                    </a>
                    <div className="category-details">
                      <h6>
                        <a href="#"> Sculpture </a>{" "}
                      </h6>
                      <span> $55 </span>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="product">
                      <img src="images\cart-thumb8.jpg" alt="" title="" />
                    </a>
                    <div className="category-details">
                      <h6>
                        <a href="#"> Water Print </a>{" "}
                      </h6>
                      <span> $10 </span>
                    </div>
                  </li>
                </ul>
                <div className="project-details">
                  <ul className="client-details">
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
                        <i className="fa fa-eye"></i>2,318
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Colors :</span>
                        <a href="#" className="yellow"></a>
                        <a href="#" className="green"></a>
                        <a href="#" className="orange"></a>
                        <a href="#" className="red"></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Sales Sheet :</span>PDF
                      </p>
                    </li>
                    <li>
                      <span>Tags :</span>
                      <div className="tagcloud type3">
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
        <Footer />
      </div>
    </Layout>
  );
}

export default Detail;

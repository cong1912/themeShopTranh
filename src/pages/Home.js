import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Nav from "../components/Nav";

function Home() {
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
              <h3> Shop </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>
          <div className="fullwidth-section shop-grid">
            <div className="sorting-products">
              <div className="dt-sc-one-fifth column first">
                <div className="categories">
                  <h5>Categories</h5>
                  <div className="selection-box">
                    <select className="shop-dropdown">
                      <option value="-1" selected="">
                        Choose your category
                      </option>
                      <option value="1" className="fa fa-fire-extinguisher">
                        Canvas Print
                      </option>
                      <option value="1" className="fa fa-camera-retro">
                        Photogenic Art
                      </option>
                      <option value="3" className="fa fa-pencil">
                        Sketches
                      </option>
                      <option value="4" className="fa fa-eyedropper">
                        Dropper Painting
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="dt-sc-one-fifth column">
                <div className="categories">
                  <h5>Sort By</h5>
                  <div className="selection-box">
                    <select className="shop-dropdown">
                      <option value="-1" selected="">
                        Sort by
                      </option>
                      <option value="1" className="fa fa-mortar-board">
                        Popular Artist
                      </option>
                      <option value="2" className="fa fa-money">
                        Best Seller
                      </option>
                      <option value="3" className="fa fa-thumb-tack">
                        Featured Art
                      </option>
                      <option value="4" className="fa fa-child">
                        New Artist
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="dt-sc-one-fifth column">
                <div className="categories">
                  <h5>Art Type</h5>
                  <div className="selection-box">
                    <select className="shop-dropdown">
                      <option value="-1" selected="">
                        Choose your type
                      </option>
                      <option value="1" className="fa fa-flask">
                        Acrylic
                      </option>
                      <option value="2" className="fa fa-paint-brush">
                        Oil Painting
                      </option>
                      <option value="2" className="fa fa-scissors">
                        Sculpture
                      </option>
                      <option value="3" className="fa fa-tint">
                        Water Painting
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="dt-sc-one-fifth column">
                <div className="categories">
                  <h5>Size &amp; Shape</h5>
                  <div className="selection-box">
                    <select className="shop-dropdown">
                      <option value="-1" selected="">
                        Choose your shape
                      </option>
                      <option value="1" className="fa fa-picture-o">
                        Landscape
                      </option>
                      <option value="2" className="fa fa-barcode">
                        Portrait
                      </option>
                      <option value="3" className="fa fa-area-chart">
                        Skew Framed
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="dt-sc-one-fifth column">
                <div className="categories">
                  <h5>Color</h5>
                  <div className="selection-box">
                    <select className="shop-dropdown">
                      <option value="-1" selected="">
                        Choose your color
                      </option>
                      <option value="1" className="fa fa-bookmark red">
                        Red
                      </option>
                      <option value="2" className="fa fa-bookmark yellow">
                        Yellow
                      </option>
                      <option value="3" className="fa fa-bookmark blue">
                        Blue
                      </option>
                      <option value="4" className="fa fa-bookmark green">
                        Green
                      </option>
                      <option value="5" className="fa fa-bookmark black">
                        Black
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <ul className="products isotope">
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-1.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>You don't take a photograph, Just make it</p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $25 </span>
                </div>
              </li>
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-2.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>
                      Every child is an artist. The problem is to remain an
                      artist once we grow up!!
                    </p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $15 </span>
                </div>
              </li>
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-3.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>Art enables us to find ourselves</p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $20 </span>
                </div>
              </li>
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-4.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>Art is a poem without words</p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $35 </span>
                </div>
              </li>
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-5.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>Creativity takes courage</p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $15 </span>
                </div>
              </li>
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-6.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>Art is a lie that makes us to realize truth</p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $10 </span>
                </div>
              </li>
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-7.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>
                      Nature is not only all that is visible to the eye.. Its
                      the soul!!
                    </p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $30 </span>
                </div>
              </li>
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-8.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>Everything has its beauty, but not everyone sees it!</p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $25 </span>
                </div>
              </li>
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-9.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>
                      A great artist is always before his time or behind it.
                    </p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $20 </span>
                </div>
              </li>
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-10.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>Life is the art of drawing without an eraser</p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $40 </span>
                </div>
              </li>
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-11.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>
                      Every artist dips his brush in his own soul, and paints
                      his own nature into his pictures!!
                    </p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $20 </span>
                </div>
              </li>
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-12.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>
                      It's not what you look at that matters, it's what you see
                    </p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $35 </span>
                </div>
              </li>
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-13.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>
                      A painting is never finished - it simply stops in
                      interesting places
                    </p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $10 </span>
                </div>
              </li>
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-14.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>Art is the stored honey of the human soul.</p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $45 </span>
                </div>
              </li>
              <li className="product-wrapper dt-sc-one-fifth">
                <div className="product-container">
                  <a href="shop-detail.html">
                    <div className="product-thumb">
                      {" "}
                      <img src="images\product-15.jpg" alt="image" />{" "}
                    </div>{" "}
                  </a>

                  <div className="product-title">
                    <a href="shop-cart.html" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-shopping-cart"></span> Add to Cart{" "}
                    </a>
                    <a href="#" className="type1 dt-sc-button">
                      {" "}
                      <span className="fa fa-unlink"></span> Options{" "}
                    </a>
                    <p>
                      Great things are done by a series of small things brought
                      together
                    </p>
                  </div>
                </div>

                <div className="product-details">
                  <h5>
                    {" "}
                    <a href="shop-detail.html"> Ellents Style Grade </a>{" "}
                  </h5>
                  <span className="amount"> $15 </span>
                </div>
              </li>
            </ul>
            <div className="container">
              <div className="dt-sc-post-pagination">
                <a
                  className="dt-sc-button small type3 with-icon prev-post"
                  href="#"
                >
                  {" "}
                  <span> Previous </span> <i className="fa fa-hand-o-left"> </i>{" "}
                </a>
                <a
                  className="dt-sc-button small type3 with-icon next-post"
                  href="#"
                >
                  <i className="fa fa-hand-o-right"> </i> <span> Next </span>{" "}
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Layout>
  );
}

export default Home;

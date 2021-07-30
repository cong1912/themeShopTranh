import React from "react";
import Header from "./Header";
import Nav from "./Nav";

function Layout(props) {
  return (
    <>
      <div className="loader-wrapper">
        <div id="large-header" className="large-header">
          <h1 className="loader-title">
            <span>Red</span> Art
          </h1>
        </div>
      </div>
      <div className="wrapper">
        <div className="inner-wrapper">
          <Header />
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Layout;

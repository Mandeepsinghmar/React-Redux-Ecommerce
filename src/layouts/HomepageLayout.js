import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function HomepageLayout(props) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header {...props} />
      {props.children}
      <Footer />
    </div>
  );
}

export default HomepageLayout;

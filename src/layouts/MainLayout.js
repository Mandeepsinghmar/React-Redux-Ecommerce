import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout(props) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default MainLayout;

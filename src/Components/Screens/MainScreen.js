import React, { Fragment } from "react";
import Hero from "../Layout/Hero/Hero";
import Home from  "../Layout/Home/Home";

function MainScreen() {
  return (
    <Fragment>
      {/* The Hero Component */}
      <Hero />
      {/* the Home Component */}
      <Home />
    </Fragment>
  );
}

export default MainScreen;

import React from "react";
import classes from "./LoadingSpinner.module.css";

// Show the Loading Spinner When the User is in Loading State
function LoadingSpinner() {
  return (
    <div className={classes.loading}>
      <div className={classes["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;

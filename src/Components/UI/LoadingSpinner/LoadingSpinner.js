import React from 'react';
import classes from './LoadingSpinner.module.css';

// Show the Loading Spinner When the User is in Loading State
function LoadingSpinner() {
  return (
    // <div>Loadind Spinner....</div>
    <div className={classes['lds-roller']}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}

export default LoadingSpinner;
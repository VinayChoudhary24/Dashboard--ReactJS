import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./DateSelection.module.css";

function DateSelection() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  //  On Cancel Button Click
  function resetInput() {
    setDateRange([null, null]);
  }

  // On Search Button Click
  function search(startDate, endDate) {
    
  }

  return (
    <div className={classes["date-selection"]}>
      <div>
        {/* The Calender */}
      <DatePicker
        className={classes["date-input"]}
        placeholderText="Select Range"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
          // isClearable={true}
      />
      </div>
      
      <div className={classes.options}>
        <button className={classes.button} onClick={resetInput}>Clear</button>
        <button className={classes.button} onClick={search}>Search</button>
      </div>
      
    </div>
  );
}
export default DateSelection;

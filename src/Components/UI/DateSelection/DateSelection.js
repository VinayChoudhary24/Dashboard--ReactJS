import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./DateSelection.module.css";
import moment from "moment";
// import { DatePicker, Space } from "antd";
// const { RangePicker } = DatePicker;

function DateSelection() {
  const [dateRange, setDateRange] = useState([]);
  // console.log(dateRange)
  const [startDate, endDate] = dateRange;

  //  On Cancel Button Click
  function resetInput() {
    setDateRange([null, null]);
  }

  // On Search Button Click
  const search = async () => {};

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
        onChange={ (values) => {
          // const value1 = moment(values[0].format('YYYY-MM-DD'))
          // // console.log(value1);
          setDateRange(values.map( item => {
            return moment(item).format('YYYY-MM-DD');
          }))
        }}
          // isClearable={true}
      />
      </div>

      <div className={classes.options}>
        <button className={classes.button} onClick={resetInput}>
          Clear
        </button>
        <button className={classes.button} onClick={search()}>
          Search
        </button>
      </div>

    </div>
  );
}
export default DateSelection;

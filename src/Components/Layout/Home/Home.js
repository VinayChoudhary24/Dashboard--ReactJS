import React, { useEffect, useState } from "react";
import DateSelection from "../../UI/DateSelection/DateSelection";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import SearchForm from "../../UI/SearchForm/SearchForm";
import DetailedList from "./DetailedList/DetailedList";
import classes from "./Home.module.css";

const Home = () => {
  // State for Getting Data from API, by Default the Value is an Empty Array
  const [detailedAppList, setDetailedAppList] = useState([]);

  // State for Loading Spinner, by Default the Value is false
  const [isLoading, setIsLoading] = useState(true);

  // State for Error
  const [httpError, setHttpError] = useState();

  // Using useEffect Hook for Side-Effects Handling
  useEffect(() => {
    // Fetching from the API
    const fetchDetailedList = async () => {
      // Here, the State of Loading Spinner is True
      setIsLoading(true);
      // Clear any Previous Errors
      setHttpError(null);

      // API Endpoint
      const response = await fetch(
        "https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=10"
      );

      // Throw Error
      if (!response.ok) {
        throw new Error("An error Occured...");
      }
      const responseData = await response.json();
      // console.log(responseData);

      // Transform the Data
      const loadedData = [];
       console.log(responseData.data);
      for (const key in responseData) {
        loadedData.push({
          id: key,
          totalInstall: responseData[key].data[0].totalinstall,
          androidInstall: responseData[key].data[0].android_install,
          iosInstall: responseData[key].data[0].ios_install,
          totalUninstall: responseData[key].data[0].totaluninstall,
          androidUninstall: responseData[key].data[0].android_uninstall,
          iosUninstall: responseData[key].data[0].ios_uninstall,
          totalChurn: responseData[key].data[0].totalchurn,
          androidChurn: responseData[key].data[0].android_churn,
          iosChurn: responseData[key].data[0].ios_churn,
        });
        // console.log(responseData.data[0].totalInstall);
        // console.log(responseData.data.totalinstall);
        // console.log(responseData[key].data[0].ios_install);
      }
      // Update the AppDetailsList
      setDetailedAppList(loadedData);
      // Stop the loading Spinner when data is Fetched
      setIsLoading(false);
    };
    // Handling Error
    fetchDetailedList().catch((error) => {
      setHttpError(error.message);
    });
    setIsLoading(false);
  }, []);

  const loadedDetailedList = detailedAppList.map((list) => (
    <DetailedList
      key={list.id}
      id={list.id}
      totalInstall={list.totalInstall}
      androidInstall={list.androidInstall}
      iosInstall={list.iosInstall}
      totalUninstall={list.totalUninstall}
      androidUninstall={list.androidUninstall}
      iosUninstall={list.iosUninstall}
      totalChurn={list.totalChurn}
      androidChurn={list.androidChurn}
      iosChurn={list.iosChurn}
    />
  ));

  return (
    <div className={classes.home}>
      {/* Show Entries and Date Selection */}
      <div className={classes["search-bar"]}>
        <div className={classes['search-form']}>
          <span className={classes['search-text']}>Show</span>
          <span><SearchForm /></span>
          <span className={classes['search-text']}>Entries</span>
        </div>
        <div className={classes['date-filter']}>
           {/* Date Range Component */}
            <DateSelection />
        </div>
      </div>
      {/* Show the Detailed List */}
      <div className={classes.list}> 
        {isLoading ? <LoadingSpinner /> : <div>{loadedDetailedList}</div>}

        {/* To Show the Error on the Page */}
        {!isLoading && httpError && <p>{httpError}</p>}
      </div>
    </div>
  );
};

export default Home;

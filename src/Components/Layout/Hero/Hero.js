import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';
import classes from './Hero.module.css';
import HeroDescription from './HeroDescription/HeroDescription';


const Hero = () => {
    // State for Getting Data from API, by Default the Value is an Empty Array
    const [appDetails, setAppDetails] = useState([]);

    // State for Loading Spinner, by Default the Value is false
    const [isLoading, setIsLoading] = useState(true);

    // State for Error
    const [httpError, setHttpError] = useState()

    // Using useEffect Hook for Side-Effects Handling
    useEffect( () => {
      // Fetching from the API
      const fetchAppDetails = async () => {
        // Here, the State of Loading Spinner is True
        setIsLoading(true);
        // Clear any Previous Errors
        setHttpError(null);

        // API Endpoint
        const response = await fetch('https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount');

        // Throw Error
        if(!response.ok) {
          throw new Error('An error Occured...');
        }
        const responseData = await response.json();
        // console.log(responseData);

        // Transform the Data
        const loadedData = [];
        for (const key in responseData) {
          loadedData.push({
           id: key,
            totalInstall: responseData[key].totalInstall,
            activeInstall: responseData[key].activeinstall,
            churn: responseData[key].churn,
            totalUninstall: responseData[key].totaluninstall,
            aliveAppUsers: responseData[key].aliveappusers,
            aliveChurn: responseData[key].alivechurn,
          });
          // console.log(key)
          // console.log(responseData[key]);
          // console.log(responseData[key].totalInstall);
        }
        // Update the AppDetails
        setAppDetails(loadedData);
        // Stop the loading Spinner when data is Fetched
        setIsLoading(false);
      }
      // Handling Error
      fetchAppDetails()
      .catch( error => {
        setHttpError(error.message)
      })
      setIsLoading(false);
    }, []);

    const appDetailsList = appDetails.map((detail) => (
      // Render the Description Component
      <HeroDescription 
      key={detail.id}
      id={detail.id}
      totalInstall={detail.totalInstall}
      activeInstall={detail.activeInstall}
      churn={detail.churn}  
      totalUninstall={detail.totalUninstall}
      aliveAppUsers={detail.aliveAppUsers} 
      aliveChurn={detail.aliveChurn}
      />      
    ));

  return (
    <div className={classes.hero}>
      {/* Show the List when not Loading anymore */}
      {isLoading ? <LoadingSpinner /> : <div>{appDetailsList}</div>}

      {/* Error Message */}
      {!isLoading && httpError && <p>{httpError}</p>}
    </div>
  )
}

export default Hero;
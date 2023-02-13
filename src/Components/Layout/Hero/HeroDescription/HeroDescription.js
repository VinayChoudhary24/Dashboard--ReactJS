import React from 'react'
import classes from './HeroDescription.module.css';
import DownloadingIcon from '@mui/icons-material/Downloading';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import FileDownloadOffIcon from '@mui/icons-material/FileDownloadOff';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// Destructuring
const HeroDescription = ({ totalInstall, activeInstall, churn, totalUninstall, aliveAppUsers, aliveChurn }) => {
  return (
    <div className={classes.description}>
        {/* The App Installed */}
        <div className={classes.information}>
        <div className={classes.iconbutton}>
            <DownloadingIcon className={classes.icon} />
            </div>
            <div className={classes.details}>
            <h5>{totalInstall}</h5>
            <p>App Installed</p>
            </div>
        </div>

        {/* Active Installs */}
        <div className={classes.information}>
            <div className={classes.iconbutton}>
            <TouchAppIcon className={classes.icon} />
            </div>
            <div className={classes.details}>
            <h5>{activeInstall}</h5>
            <p>Active Installs</p>
            </div>
        </div>

        {/* Churn Rate */}
        <div className={classes.information}>
            <div className={classes.iconbutton}>
            <TrendingFlatIcon className={classes.icon} />
            </div>
            <div className={classes.details}>
            <h5>{churn}</h5>
            <p>Churn Rate</p>
            </div>
        </div>

        {/* Total Uninstalled */}
        <div className={classes.information}>
            <div className={classes.iconbutton}>
            <FileDownloadOffIcon className={classes.icon} />
            </div>
            <div className={classes.details}>
            <h5>{totalUninstall}</h5>
            <p>Total Uninstalled</p>
            </div>
        </div>

        {/* Alive Apps Users */}
        <div className={classes.information}>
            <div className={classes.iconbutton}>
            <PeopleIcon className={classes.icon} />
            </div>
            <div className={classes.details}>
            <h5>{aliveAppUsers}</h5>
            <p>Alive Apps Users</p>
            </div>
        </div>

        {/* Alive Churn Rate */}
        <div className={classes.information}>
            <div className={classes.iconbutton}>
            <TrendingUpIcon className={classes.icon} />
            </div>   
            <div className={classes.details}>
            <h5>{aliveChurn}</h5>
            <p>Alive Churn Rate</p>
            </div>
        </div>
    </div>
  );
};

export default HeroDescription;
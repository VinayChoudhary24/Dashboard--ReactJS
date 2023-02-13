import React from 'react';
import SidebarOptions from './SidebarOptions/SidebarOptions';
import classes from './Sidebar.module.css';
import { IconButton } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import CategoryIcon from '@mui/icons-material/Category';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import QuizIcon from '@mui/icons-material/Quiz';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SettingsIcon from '@mui/icons-material/Settings';


function Sidebar() {
  return (
    // Main Container
    <aside className={classes.sidebar}>
      {/* The User Section */}
        <div className={classes['user-section']}>
            <img 
            src="https://i.ibb.co/5k6zg8p/IMG-20220217-122856.jpg" 
            alt="User" />
            <h3>WOW</h3>
            <IconButton>
              <SettingsIcon className={classes.settings} />
            </IconButton>
        </div>
        {/* All the Options inside the Sidebar */}
        {/* The SidebarOptions Component with PROPS */}
        <SidebarOptions Icon={GridViewIcon} title="Dashboard" />
        <SidebarOptions Icon={PersonOutlineIcon} title="WOW Users" />
        <SidebarOptions Icon={OndemandVideoIcon} title="Video Clips" />
        <SidebarOptions Icon={ReportGmailerrorredIcon} title="Reported Content" />
        <SidebarOptions Icon={CategoryIcon} title="Category" />
        <SidebarOptions Icon={BatchPredictionIcon} title="Info Page" />
        <SidebarOptions Icon={QuizIcon} title="FAQ" />
        <SidebarOptions Icon={NotificationsNoneIcon} title="Push Notification" />
        <SidebarOptions Icon={PersonAddAltIcon} title="Internal User" />
    </aside>
  )
}

export default Sidebar;
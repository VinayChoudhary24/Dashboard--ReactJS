import React from "react";
import classes from "./DetailedList.module.css";
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

const DetailedList = ({
  id,
  totalInstall,
  androidInstall,
  iosInstall,
  totalUninstall,
  androidUninstall,
  iosUninstall,
  totalChurn,
  androidChurn,
  iosChurn,
}) => {

  return (
    <div className={classes.list}>
      <table>
        <thead>
          <th>Date</th>
          <th>Day Installs</th>
          <th>Platform</th>
          <th>Day Uninstalls</th>
          <th>Platform</th>
          <th>Churn Rate</th>
          <th>Churn Platform</th>
        </thead>

        <tbody>
          <tr key={id}>
            <td>
              <span>DATE</span>
            </td>
            <td>
              <span>{totalInstall}</span>
            </td>
            <td>
              <div>
                <span><AndroidIcon /></span>
                <span>{androidInstall}</span>
              </div>
              <div>
                <span><AppleIcon /></span>
                <span>{iosInstall}</span>
              </div>
            </td>
            <td>
              <span>{totalUninstall}</span>
            </td>
            <td>
              <div>
                <span><AndroidIcon /></span>
                <span>{androidUninstall}</span>
              </div>
              <div>
                <span><AppleIcon /></span>
                <span>{iosUninstall}</span>
              </div>
            </td>
            <td>
              <span>{totalChurn}</span> 
            </td>
            <td>
              <div>
                <span><AndroidIcon /></span>
                <span>{androidChurn}</span>
              </div>
              <div>
                <span><AppleIcon /></span>
                <span>{iosChurn}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailedList;

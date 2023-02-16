import React from 'react';
import { FaCircleUser } from 'react-icons';
import Sales from '../Sales/Sales.js';
import Views from '../Views/Views.js';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Design = {
  li: {
    listStyle: 'none',
    marginRight: '1rem',
    color: '#7b809a',
    fontWeight: 'bold',
  },
};

const MainPage = () => {
  return (
    <>
      <section className="Mains">
        <div className="heads">
          <h4 className="MainHead">Analytics</h4>
          <ul className="headlist">
            <li style={Design.li}>
              <input type="text" defaultValue="Search" className="Searchs" />
            </li>
            <li style={Design.li}>
              <SettingsIcon />
            </li>
            <li style={Design.li}>
              <AccountCircleIcon />
            </li>
            <li style={Design.li}>
              <NotificationsIcon />
            </li>
          </ul>
        </div>
      </section>
      <Sales />
      <Views />
    </>
  );
};

export default MainPage;

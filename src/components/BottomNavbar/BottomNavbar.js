import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';

const BottomNavbar = () => {
  const homeIcon = <FontAwesomeIcon icon={faHouse} />;
  const profileIcon = <FontAwesomeIcon icon={faUser} />;
  const recipesIcon = <FontAwesomeIcon icon={faRectangleList} />;

  return (
    <div className="bottomNavBarItems">
      <Tooltip title="Home">
        <IconButton style={{ color: 'white', fontSize: '50px' }}>
          <Link to='/'>{homeIcon} </Link>
        </IconButton>
      </Tooltip>
      <Tooltip title="Recipes">
        <IconButton style={{ color: 'white', fontSize: '50px' }}>
          <Link to='/recipefinder'>{recipesIcon} </Link>
        </IconButton>
      </Tooltip>
      <Tooltip title="Profile">
        <IconButton style={{ color: 'white', fontSize: '50px' }}>
          <Link to='/profile'>{profileIcon} </Link>
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default BottomNavbar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header row">
      <div className="col-xs-6 header-videos">
        <NavLink 
          to="./videos" 
          activeClassName="active"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
        >Videos</NavLink>
      </div>
      <div className="col-xs-6 header-articles">
        <NavLink to="./articles" 
          activeClassName="active"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
        >Articles</NavLink>
      </div>
    </div>
  );  
};

export default Header;

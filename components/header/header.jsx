import React from 'react';
import Navbar from '../navbar/navbar';

import './index.scss';

const Header = () => {
  return (
    <div className="header-container">
      <div className='container'>
        <header className='header d-flex align-items-center'>
          <Navbar className='header__navbar' />
        </header>
      </div>
    </div>
  );
};

export default Header;

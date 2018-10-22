import React from 'react';
import { Navbar } from 'reactstrap';

const NavbarComponent = props => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Navbar style={{ width: '70vw' }}>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flexStart'
          }}
        >
          <li style={{ marginRight: '5%' }}>Home</li>
          <li style={{ marginRight: '5%' }}>About</li>
          <li style={{ marginRight: '5%' }}>Contact</li>
          <li style={{ marginRight: '5%' }}>Blog</li>
        </ul>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

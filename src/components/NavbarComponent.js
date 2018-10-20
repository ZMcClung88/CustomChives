import React from 'react';
import { Navbar } from 'reactstrap';

const NavbarComponent = props => {
  return (
    <div
      style={{
        border: '1px solid red',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Navbar style={{ border: '1px solid green', width: '70vw' }}>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

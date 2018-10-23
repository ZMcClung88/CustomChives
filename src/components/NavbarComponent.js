import React from 'react';
import { Navbar } from 'reactstrap';

const NavbarComponent = props => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}
    >
      <Navbar style={{ width: '70vw', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '40%' }}>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flexStart'
            }}
          >
            <li style={{ marginRight: '5%' }}>
              <a>Bandcamp</a>
            </li>
            <li style={{ marginRight: '5%' }}>
              <a>Facebook</a>
            </li>
            <li style={{ marginRight: '5%' }}>
              <a>Instagram</a>
            </li>
            <li style={{ marginRight: '5%' }}>
              <a>Blog</a>
            </li>
          </ul>
        </div>

        <div style={{ width: '20%' }}>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flexStart'
            }}
          >
            <li style={{ marginRight: '5%' }}>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

import React from 'react';

import img from '../media/chives_logo.JPG';

const SongComponent = props => {
  return (
    <div
      style={{ height: '150px', width: '100%', border: '1px solid blue', display: 'flex', justifyContent: 'center' }}
    >
      <div>
        <img style={{ height: '50px', width: '50px' }} src={img} />
      </div>
      <div>
        <button style={{ height: '20%', width: '100px' }}>Play</button>
      </div>
    </div>
  );
};

export default SongComponent;

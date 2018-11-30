import React from 'react';

const SongComponent = props => {
  return (
    <div
      style={{ height: '150px', width: '100%', border: '1px solid blue', display: 'flex', justifyContent: 'center' }}
    >
      <button style={{ height: '20%', width: '100px' }}>Play</button>
    </div>
  );
};

export default SongComponent;

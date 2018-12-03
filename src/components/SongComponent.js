import React from 'react';

const SongComponent = props => {
  return (
    <div
      style={{ height: '100px', width: '100%', border: '1px solid blue', display: 'flex', justifyContent: 'center' }}
    >
      <div style={{ width: '25%' }} className="left">
        <img style={{ height: '100%', width: '100%' }} src={props.img} />
      </div>

      <div style={{ width: '75%', display: 'flex', flexDirection: 'column' }} className="right">
        <div className="top" style={{ border: '3px solid blue', height: '50%' }}>
          <p>Song Title</p>
          <p>by Chives</p>
        </div>

        <div className="bottom" style={{ border: '3px solid orange', height: '50%' }}>
          <button style={{ height: '20%', width: '100px' }}>Play</button>
        </div>
      </div>
    </div>
  );
};

export default SongComponent;

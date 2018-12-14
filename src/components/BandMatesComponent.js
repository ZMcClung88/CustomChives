import React from 'react';

const BandMatesComponent = props => {
  return (
    <div
      style={{
        height: 'auto',
        width: '100%',
        // border: '1px solid blue',
        display: 'flex',
        justifyContent: 'space-around'
      }}
    >
      <div
        style={{
          height: '100px',
          width: '100px',
          border: '2px solid orange',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%'
        }}
      >
        <p>name</p>
      </div>
      <div
        style={{
          height: '100px',
          width: '100px',
          border: '2px solid orange',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%'
        }}
      >
        <p>name</p>
      </div>
      <div
        style={{
          height: '100px',
          width: '100px',
          border: '2px solid orange',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%'
        }}
      >
        <p>name</p>
      </div>
    </div>
  );
};

export default BandMatesComponent;

import React from 'react';

const LiveDatesComponent = props => {
  return (
    <div
      style={{
        height: 'auto',
        width: '100%',
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h1>See Chives Live</h1>
      <div>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <li>11/23 - Melody Inn</li>
          <li>11/25 - Vogue</li>
          <li>11/26 - Egyptian Room</li>
          <li>11/23 - Melody Inn</li>
          <li>11/25 - Vogue</li>
          <li>11/26 - Egyptian Room</li>
          <li>11/23 - Melody Inn</li>
          <li>11/25 - Vogue</li>
          <li>11/26 - Egyptian Room</li>
          <li>11/23 - Melody Inn</li>
          <li>11/25 - Vogue</li>
          <li>11/26 - Egyptian Room</li>
        </ul>
      </div>
    </div>
  );
};

export default LiveDatesComponent;

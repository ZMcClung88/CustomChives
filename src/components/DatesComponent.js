import React from 'react';

const LiveDatesComponent = props => {
  return (
    <div
      style={{
        height: 'auto',
        width: '100%',
        border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h1 ml-0 className="ml-0">
        Chives Live
      </h1>
      <ul style={{ border: '1px solid red' }}>
        <li style={{ border: '1px solid green' }}>11/23 - Melody Inn</li>
        <li style={{ border: '1px solid green' }}>11/25 - Vogue</li>
        <li style={{ border: '1px solid green' }}>11/26 - Egyptian Room</li>
        <li ml-0 className="ml-0" style={{ border: '1px solid green' }}>
          11/23 - Melody Inn
        </li>
        <li style={{ border: '1px solid green' }}>11/25 - Vogue</li>
        <li style={{ border: '1px solid green' }}>11/26 - Egyptian Room</li>
        <li ml-0 className="ml-0" style={{ border: '1px solid green' }}>
          11/23 - Melody Inn
        </li>
        <li style={{ border: '1px solid green' }}>11/25 - Vogue</li>
        <li style={{ border: '1px solid green' }}>11/26 - Egyptian Room</li>
      </ul>
    </div>
  );
};

export default LiveDatesComponent;

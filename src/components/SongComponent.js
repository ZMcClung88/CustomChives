import React from 'react';
import ReactPlayer from 'react-player';

const SongComponent = props => {
  return (
    <div
      style={{ height: '100px', width: '100%', border: '1px solid blue', display: 'flex', justifyContent: 'center' }}
    >
      <div style={{ width: '25%' }} className="left">
        <img style={{ height: '100%', width: '100%' }} src={props.img} />
      </div>

      <div style={{ width: '75%', display: 'flex', flexDirection: 'column' }} className="right">
        <div
          className="top"
          style={{
            height: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
          }}
        >
          <p style={{ marginTop: 1, paddingLeft: 5, marginBottom: 0, display: 'flex' }}>Song Title</p>
          <p style={{ marginTop: 5, paddingLeft: 5, display: 'flex' }}>by Chives</p>
        </div>

        <div
          className="bottom"
          style={{
            // border: '3px solid orange',
            height: '50%',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '3px'
          }}
        >
          <div>
            <button style={{ height: '40px', width: '40px' }}>Play</button>
          </div>

          <div>
            <ReactPlayer url={props.songUrl} playing={this.state.playing} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongComponent;

import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import ChivesLogo from '../media/chives_logo.JPG';

const JumbotronComponent = props => {
  return (
    <div
      style={{
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Jumbotron style={{ width: '70vw' }}>
        <img src={ChivesLogo} style={{ width: '70vw' }} />
        {/* <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content
          or information.
        </p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p> */}
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;

import React, { Component } from 'react';
import './OldApp.css';
import devlogo from './devlogo.png';


class OldApp extends Component {
  render() {
    return (
      <div className="OldApp-Container">
        <div className="Top-Content">
          <div><img className='Round-Image' src={devlogo} /></div>

          <div className='Top-Text'>
            <p>The Practical Dev</p>
          </div>
          <p className='Username'>@ThePracticalDev - Sep 10</p>

          <div className='Post-Title'>
            <p>Learning React? Start Small.</p>
            <p>{'author: @dceddia'}</p>
          </div>

          <p className='Modal-Arrow'>v</p>
        </div>

        <div className="Middle-Content">
          <div><img className='Square-Image' src={devlogo} /></div>
          <h3>Learning React? Start Small.</h3>
          <p>author logo</p>
        </div>

        <div className="Middle-Bottom-Text">
          <p>Learning React? Start Small.</p>
          <p>Can't pry yourself away from the tutorials?
          The cure is to make tiny little experiment OldApps.</p>
          <h6>dev.to</h6>
        </div>

        <div className="Bottom-Icons">
          <h5>Msg 2</h5>
          <h5>Rtw 47</h5>
          <h5>hearts 190</h5>
          <h5>email</h5>
        </div>
      </div>
    )
  }
}

export default OldApp;

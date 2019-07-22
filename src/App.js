import React, { Component } from 'react';
import './App.css';
import devlogo from './devlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';



class App extends Component {
  render() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const currentDate = new Date();
    const currentMonth = currentDate.getUTCMonth();
    const currentDay = currentDate.getDate();
    return (
      <div className='card' style={{width: '70vw', backgroundColor: '#252A70', color: 'white'}}>
        <div className='card-body'>
        <p style={{float: 'right'}}>v</p>
          <div className='card-title' style={{width: '350px', lineHeight: 1.2}}>
            <img src={devlogo} alt='dev logo' style={{borderRadius: '50%', width: 48, height: 48, float: 'left', marginRight: 5}}/> <span>The Practical Dev</span>
            <span style={{color: 'gray', fontSize: 13}}> @ThePracticalDev &middot;</span>
            <span style={{color: 'gray', fontSize: 13}}> {months[currentMonth]} {currentDay} </span>
            <span style={{fontSize: 14}}>Learning React? Start Small.</span>
            <p style={{fontSize: 11, color: 'gray'}}>author: @aridoza</p>
          </div>
          <hr />
          <img
            src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
            className='card-img-top'
            alt='cat'
            style={{borderRadius: 10}}
          />
          <div className='card-text' style={{textAlign: 'left'}}>
            <span><FontAwesomeIcon icon={faComment} /></span> <span style={{fontSize: 13, marginRight: 50}}> 23 </span>
            <span><FontAwesomeIcon icon={faRetweet} style={{color: '#33d749'}}/></span> <span style={{fontSize: 13, marginRight: 50}}> 49 </span>
            <span><FontAwesomeIcon icon={faHeart} style={{color: '#df2121'}}/></span> <span style={{fontSize: 13, marginRight: 50}}> 122 </span>
            <span><FontAwesomeIcon icon={faEnvelope} /></span>
          </div>
          <hr />
          <div className='card-text' style={{fontSize: 14, lineHeight: 1}}>
            <p>Learning React? Start Small.</p>
            <p>Can't pry yourself away from tutorials? The cure is to make tiny ittle experiment apps.</p>
            <a href='#'>dev.to</a>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

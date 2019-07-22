import React, { Component } from 'react';
import './App.css';
import devlogo from './devlogo.png';


class App extends Component {
  render() {
    return (
      <div className="BarkEntry-BarkHolder">
        <h1 style={{marginBottom: 0}}>
          Bark - Hear Us Roar
        </h1>

        <div className='BarkEntry'>
          <div className='BarkEntry-Content'>
            <a className='BarkEntry-Account-Group' href='https://www.google.com'>
              <img
                className='BarkEntry-Avatar'
                src='http://placekitten.com/200/200'
               />
              <strong className='BarkEntry-FullName'>
                fullname
              </strong>
              <span className='BarkEntry-Username'>
                @<b>username</b>
              </span>
              <span className='BarkEntry-Timestamp'>
                - timestamp
              </span>
            </a>

            <div className='BarkEntry-TextContainer'>
              Tweet post text here, a bunch of text,
              big ol' textity text-text all the live
              long day.
            </div>

          </div>

          <div
            className='OptionalMedia'
            style={{display: 'none'}}
            >
            <img
              className='OptionalMedia-Image'
              src='https://i.imgut.com/kOhhPAk.jpg'
            />
          </div>

          <div className='BarkEntry-ActionList' style={{lineHeight: 24, color: '#b1bbc3'}}>
            <i
              className='Bark-Reply'
              style={{width: 80}}
            ></i>
            <i
              className='Bark-Retweet'
              style={{width: 80}}
            ></i>
            <i
              className='Bark-Heart'
              style={{width: 80}}
            ></i>
          </div>
        </div>
        {/*Entry with Media turned on*/}
        <div className='BarkEntry'>
          <div className='BarkEntry-Content'>
            <a
              className='BarkEntry-AccountGroup'
              href='#'
            >
            <img
              className='BarkEntry-Avatar'
              src='http://placekitten.com/100/100'
            />

            <strong className='BarkEntry-FullName'>[fullName]</strong>
            <span className='BarkEntry-Username'>
              @<b>username</b>
            </span>

            <span className='BarkEntry-Timestamp'>
              - timestamp
            </span>
            </a>

            <div className='BarkEntry-TextContainer'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>

          </div>

          <div className='OptionalMedia'>
            <img
              className='OptionalMedia-Image'
              src='https://i.imgur.com/kOhhPAk.jpg'
            />
          </div>

          <div
            className='BarkEntry-ActionList'
            style={{lineHeight: 24, color: '#b1bbc3'}}
          >
            <i className='Bark-Reply' style={{width: 80}}></i>
            <i className='Bark-Retweet' style={{width: 80}}></i>
            <i className='Bark-Heart' style={{width: 80}}></i>
          </div>

        </div>

        <div className='BarkEntry'>
          <div className='BarkEntry-Content'>
            <a
              className='BarkEntry-AccountGroup'
              href='https://google.com'
            >
            <img
              className='BarkEntry-Avatar'
              src='http://placekitten.com/150/150'
            />
            <strong className='BarkEntry-FullName'>fullname</strong>
            <span className='BarkEntry-Username'>
              @<b>username</b>
            </span>

            <span className='BarkEntry-Timestamp'>
              - timestamp
            </span>
            </a>

            <div className='BarkEntry-TextContainer'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam ipsum, finibus ac est sed, vestibulum condimentum neque. Sed eget iaculis.
            </div>
          </div>

          <div className='OptionalMedia'>
            <img
              className='OptionalMedia-Image'
              src='http://placekitten.com/600/400'
            />
          </div>

          <div
            className='BarkEntry-ActionList'
            style={{lineHeight: 24, color: '#b1bbc3'}}
          >
            <i className='Bark-Reply' style={{width: 80}}></i>
            <i className='Bark-Retweet' style={{width: 80}}></i>
            <i className='Bark-Heart' style={{width: 80}}></i>
          </div>
        </div>

        <div className='BarkEntry'>

          <div className='BarkEntry-Content'>
            <a
              className='BarkEntry-AccountGroup'
              href='#'
            >
              <img
                className='BarkEntry-Avatar'
                src='http://placekitten.com/200/200'
              />

              <strong className='BarkEntry-FullName'>displayName</strong>

              <span className='BarkEntry-Username'>
                @<b>username</b>
              </span>

              <span className='BarkEntry-Timestamp'>
                - date
              </span>
            </a>

            <div className='BarkEntry-TextContainer'>
              text
            </div>
          </div>

          <div
            className='OptionalMedia'
          >
            <img className='OptionalMedia-Image' src='http://placekitten.com/200/200'/>
          </div>

          <div
            className='BarkEntry-ActionList'
            style={{lineHeight: 24, color: '#b1bbc3'}}
          >
              <i className='Bark-Reply' style={{width: 80}}></i>
              <i className='Bark-Retweet' style={{width: 80}}></i>
              <i className='Bark-Heart' style={{width: 80}}></i>
          </div>

        </div>

      </div>
    )
  }
}

export default App;

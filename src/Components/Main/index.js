import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function Main() {
  const staticQueryImageJeremy = useStaticQuery(graphql`
    query MyQuery {
      file(
        childrenImageSharp: {
          elemMatch: { id: { eq: "874c6504-af24-5ca7-a5dd-cf3492f03336" } }
        }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

  const imageJeremy = getImage(staticQueryImageJeremy.file);

  return (
    <div className='box'>
      <div className='head-box'>
        <div className='cover'>
          <GatsbyImage image={imageJeremy} alt='Jeremy Robson Photo' />
          <p>Report for :</p>
          <h1>Jeremy Robson</h1>
        </div>
        <ul className='action'>
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
      <div className='item-box'>
        <img alt='' />
        <div className='content'>
          <div className='head-title'>
            <h2>Work</h2>
            <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
                fill='#BBC0FF'
                fillRule='evenodd'
              />
            </svg>
          </div>
          <div className='info'>
            <h3>5hrs</h3>
            <p>Previous - 7hrs</p>
          </div>
        </div>
      </div>
      <div className='item-box'>
        <img alt='' />
        <div className='content'>
          <div className='head-title'>
            <h2>Play</h2>
            <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
                fill='#BBC0FF'
                fillRule='evenodd'
              />
            </svg>
          </div>
          <div className='info'>
            <h3>1hr</h3>
            <p>Previous - 2hrs</p>
          </div>
        </div>
      </div>
      <div className='item-box'>
        <img alt='' />
        <div className='content'>
          <div className='head-title'>
            <h2>Study</h2>
            <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
                fill='#BBC0FF'
                fillRule='evenodd'
              />
            </svg>
          </div>
          <div className='info'>
            <h3>0hr</h3>
            <p>Previous - 1hrs</p>
          </div>
        </div>
      </div>
      <div className='item-box'>
        <img alt='' />
        <div className='content'>
          <div className='head-title'>
            <h2>Exercise</h2>
            <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
                fill='#BBC0FF'
                fillRule='evenodd'
              />
            </svg>
          </div>
          <div className='info'>
            <h3>1hr</h3>
            <p>Previous - 1hrs</p>
          </div>
        </div>
      </div>
      <div className='item-box'>
        <img alt='' />
        <div className='content'>
          <div className='head-title'>
            <h2>Social</h2>
            <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
                fill='#BBC0FF'
                fillRule='evenodd'
              />
            </svg>
          </div>
          <div className='info'>
            <h3>1hr</h3>
            <p>Previous - 3hrs</p>
          </div>
        </div>
      </div>
      <div className='item-box'>
        <img alt='' />
        <div className='content'>
          <div className='head-title'>
            <h2>Self Care</h2>
            <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
                fill='#BBC0FF'
                fillRule='evenodd'
              />
            </svg>
          </div>
          <div className='info'>
            <h3>0hrs</h3>
            <p>Previous - 1hr</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  Box,
  Content,
  ContentTitle,
  HeadContent,
  Item,
  ItemHead,
} from './styledMain';
import Thumbnail from '../Thumbnail';

function Main() {
  const staticQueryImageJeremy = useStaticQuery(graphql`
    query MyQuery {
      file(name: { eq: "image-jeremy" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

  const imageJeremy = getImage(staticQueryImageJeremy.file);

  return (
    <Box>
      <ItemHead>
        <div className='cover'>
          <GatsbyImage
            image={imageJeremy}
            alt='Jeremy Robson Photo'
            title='Jeremy Robson Photo'
          />
          <p>Report for :</p>
          <h1>Jeremy Robson</h1>
        </div>
        <ul className='action'>
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </ItemHead>
      <Item backgroundColor='hsl(15, 100%, 70%)'>
        <Thumbnail src='icon-work' />
        <Content>
          <HeadContent>
            <ContentTitle>Work</ContentTitle>
            <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
                fill='#BBC0FF'
                fillRule='evenodd'
              />
            </svg>
          </HeadContent>
          <div className='info'>
            <p>5hrs</p>
            <p>Previous - 7hrs</p>
          </div>
        </Content>
      </Item>
      <Item backgroundColor='hsl(195, 74%, 62%)'>
        <Thumbnail src='icon-play' />
        <Content>
          <HeadContent>
            <ContentTitle>Play</ContentTitle>
            <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
                fill='#BBC0FF'
                fillRule='evenodd'
              />
            </svg>
          </HeadContent>
          <div className='info'>
            <p>1hr</p>
            <p>Previous - 2hrs</p>
          </div>
        </Content>
      </Item>
      <Item backgroundColor='hsl(348, 100%, 68%)'>
        <Thumbnail src='icon-study' />
        <Content>
          <HeadContent>
            <ContentTitle>Study</ContentTitle>
            <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
                fill='#BBC0FF'
                fillRule='evenodd'
              />
            </svg>
          </HeadContent>
          <div className='info'>
            <p>0hr</p>
            <p>Previous - 1hrs</p>
          </div>
        </Content>
      </Item>
      <Item backgroundColor='hsl(145, 58%, 55%)'>
        <Thumbnail src='icon-exercise' />
        <Content>
          <HeadContent>
            <ContentTitle>Exercise</ContentTitle>
            <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
                fill='#BBC0FF'
                fillRule='evenodd'
              />
            </svg>
          </HeadContent>
          <div className='info'>
            <p>1hr</p>
            <p>Previous - 1hrs</p>
          </div>
        </Content>
      </Item>
      <Item backgroundColor='hsl(264, 64%, 52%)'>
        <Thumbnail src='icon-social' />
        <Content>
          <HeadContent>
            <ContentTitle>Social</ContentTitle>
            <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
                fill='#BBC0FF'
                fillRule='evenodd'
              />
            </svg>
          </HeadContent>
          <div className='info'>
            <p>1hr</p>
            <p>Previous - 3hrs</p>
          </div>
        </Content>
      </Item>
      <Item backgroundColor='hsl(43, 84%, 65%)'>
        <Thumbnail src='icon-self-care' />
        <Content>
          <HeadContent>
            <ContentTitle>Self Care</ContentTitle>
            <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
                fill='#BBC0FF'
                fillRule='evenodd'
              />
            </svg>
          </HeadContent>
          <div className='info'>
            <p>0hrs</p>
            <p>Previous - 1hr</p>
          </div>
        </Content>
      </Item>
    </Box>
  );
}

export default Main;

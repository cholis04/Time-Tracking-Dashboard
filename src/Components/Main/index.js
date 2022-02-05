import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  Box,
  Content,
  ContentTitle,
  HeadContent,
  Info,
  Item,
  ItemHead,
  TextInfo,
} from './styledMain';
import Thumbnail from '../Thumbnail';
import ButtonOptions from '../ButtonOptions';

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
            <ButtonOptions />
          </HeadContent>
          <Info>
            <TextInfo heading={true}>5hrs</TextInfo>
            <TextInfo>Previous - 7hrs</TextInfo>
          </Info>
        </Content>
      </Item>
      <Item backgroundColor='hsl(195, 74%, 62%)'>
        <Thumbnail src='icon-play' />
        <Content>
          <HeadContent>
            <ContentTitle>Play</ContentTitle>
            <ButtonOptions />
          </HeadContent>
          <Info>
            <TextInfo heading={true}>1hrs</TextInfo>
            <TextInfo>Previous - 2hrs</TextInfo>
          </Info>
        </Content>
      </Item>
      <Item backgroundColor='hsl(348, 100%, 68%)'>
        <Thumbnail src='icon-study' />
        <Content>
          <HeadContent>
            <ContentTitle>Study</ContentTitle>
            <ButtonOptions />
          </HeadContent>
          <Info>
            <TextInfo heading={true}>0hrs</TextInfo>
            <TextInfo>Previous - 1hrs</TextInfo>
          </Info>
        </Content>
      </Item>
      <Item backgroundColor='hsl(145, 58%, 55%)'>
        <Thumbnail src='icon-exercise' />
        <Content>
          <HeadContent>
            <ContentTitle>Exercise</ContentTitle>
            <ButtonOptions />
          </HeadContent>
          <Info>
            <TextInfo heading={true}>1hrs</TextInfo>
            <TextInfo>Previous - 1hrs</TextInfo>
          </Info>
        </Content>
      </Item>
      <Item backgroundColor='hsl(264, 64%, 52%)'>
        <Thumbnail src='icon-social' />
        <Content>
          <HeadContent>
            <ContentTitle>Social</ContentTitle>
            <ButtonOptions />
          </HeadContent>
          <Info>
            <TextInfo heading={true}>1hrs</TextInfo>
            <TextInfo>Previous - 3hrs</TextInfo>
          </Info>
        </Content>
      </Item>
      <Item backgroundColor='hsl(43, 84%, 65%)'>
        <Thumbnail src='icon-self-care' />
        <Content>
          <HeadContent>
            <ContentTitle>Self Care</ContentTitle>
            <ButtonOptions />
          </HeadContent>
          <Info>
            <TextInfo heading={true}>0hrs</TextInfo>
            <TextInfo>Previous - 1hrs</TextInfo>
          </Info>
        </Content>
      </Item>
    </Box>
  );
}

export default Main;

import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const ImageThumbnail = styled.div`
  width: 100%;
  overflow: hidden;
  height: 46px;
  padding: 0 1em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

function Thumbnail({ src }) {
  switch (src) {
    case 'icon-work':
      return (
        <ImageThumbnail>
          <StaticImage width={70} src={`../../images/icon-work.svg`} alt='' />
        </ImageThumbnail>
      );
    case 'icon-play':
      return (
        <ImageThumbnail>
          <StaticImage width={70} src={`../../images/icon-play.svg`} alt='' />
        </ImageThumbnail>
      );
    case 'icon-study':
      return (
        <ImageThumbnail>
          <StaticImage width={70} src={`../../images/icon-study.svg`} alt='' />
        </ImageThumbnail>
      );
    case 'icon-exercise':
      return (
        <ImageThumbnail>
          <StaticImage
            width={70}
            src={`../../images/icon-exercise.svg`}
            alt=''
          />
        </ImageThumbnail>
      );
    case 'icon-social':
      return (
        <ImageThumbnail>
          <StaticImage width={70} src={`../../images/icon-social.svg`} alt='' />
        </ImageThumbnail>
      );
    case 'icon-self-care':
      return (
        <ImageThumbnail>
          <StaticImage
            width={70}
            src={`../../images/icon-self-care.svg`}
            alt=''
          />
        </ImageThumbnail>
      );
    default:
      return (
        <ImageThumbnail>
          <StaticImage width={70} src={`../../images/icon-work.svg`} alt='' />
        </ImageThumbnail>
      );
  }
}

export default Thumbnail;

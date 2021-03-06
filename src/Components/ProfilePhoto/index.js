import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import styled from 'styled-components';

const WrapImage = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 3px solid white;
`;

function ProfilePhoto() {
  const staticQueryImageJeremy = useStaticQuery(graphql`
    query MyQuery {
      file(sourceInstanceName: { eq: "images" }, name: { eq: "image-jeremy" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const imageJeremy = getImage(staticQueryImageJeremy.file);
  return (
    <WrapImage>
      <GatsbyImage
        image={imageJeremy}
        alt='Jeremy Robson Photo'
        title='Jeremy Robson Photo'
      />
    </WrapImage>
  );
}

export default ProfilePhoto;

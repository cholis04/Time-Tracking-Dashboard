import React from 'react';

import styled from 'styled-components';

// Styled Components
const FooterStyled = styled.footer`
  margin: 2rem auto;
`;

const TextFooter = styled.p`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
  font-size: 0.8em;
  font-weight: 300;
  line-height: 2em;
  padding: 0 1em;
`;

const LinkFooter = styled.a`
  color: hsl(228, 45%, 44%);
  transition: color 0.2s ease-in-out;

  &:hover {
    color: white;
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <TextFooter>
        Challenge by{' '}
        <LinkFooter
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noopener noreferrer'
        >
          Frontend Mentor
        </LinkFooter>
        . Coded by{' '}
        <LinkFooter
          href='https://github.com/cholis04'
          target='_blank'
          rel='noopener noreferrer'
        >
          cholis04
        </LinkFooter>
        .
      </TextFooter>
    </FooterStyled>
  );
}

export default Footer;

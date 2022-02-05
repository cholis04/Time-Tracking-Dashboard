import React from 'react';

import { Helmet } from 'react-helmet';
import GlobalStyle from '../styles/globalStyles';

import styled from 'styled-components';

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  display: grid;
  place-items: center;
  border: 2px solid blue;
`;

export default function MainLayout({ children }) {
  return (
    <>
      <Helmet>
        <title>Frontend Mentor | Time tracking dashboard</title>
      </Helmet>
      <GlobalStyle />
      <Main>{children}</Main>
    </>
  );
}

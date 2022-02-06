import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import GlobalStyle from '../styles/globalStyles';

import Footer from '../components/Footer';

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default function MainLayout({ children }) {
  return (
    <>
      <Helmet>
        <title>Frontend Mentor | Time tracking dashboard</title>
      </Helmet>
      <GlobalStyle />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

import React from 'react';

import { Helmet } from 'react-helmet';
import GlobalStyle from '../styles/globalStyles';

export default function MainLayout({ children }) {
  return (
    <>
      <Helmet>
        <title>Frontend Mentor | Time tracking dashboard</title>
      </Helmet>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
}

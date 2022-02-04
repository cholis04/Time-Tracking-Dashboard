import * as React from 'react';
import { Helmet } from 'react-helmet';

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>My Title</title>
      </Helmet>
      <main>
        <h1>Hello World</h1>
      </main>
    </>
  );
};

export default IndexPage;

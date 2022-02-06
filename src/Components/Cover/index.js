import React from 'react';

import styled from 'styled-components';

import ProfilePhoto from '../ProfilePhoto';

const CoverStyled = styled.div`
  width: 100%;
  padding: 1.6em;
  border-radius: 15px;
  background-color: hsl(246, 80%, 60%);

  @media only screen and (max-width: 680px) {
    display: flex;
    justify-content: space-between;
  }
`;

const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 680px) {
    justify-content: center;
    padding-left: 0.5em;
  }
`;

const TextCover = styled.p`
  margin-top: 2.6rem;
  margin-bottom: 0.2rem;
  color: hsl(236, 100%, 87%);
  font-size: 0.8em;

  @media only screen and (max-width: 680px) {
    margin: 0;
  }
`;

const NameCover = styled.h1`
  font-weight: 300;

  @media only screen and (max-width: 680px) {
    font-size: 1.2em;
    margin-top: 0.4rem;
  }
`;

function Cover() {
  return (
    <CoverStyled>
      <ProfilePhoto />
      <WrapInfo>
        <TextCover>Report for :</TextCover>
        <NameCover>Jeremy Robson</NameCover>
      </WrapInfo>
    </CoverStyled>
  );
}

export default Cover;

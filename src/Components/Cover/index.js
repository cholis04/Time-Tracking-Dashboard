import React from 'react';

import styled from 'styled-components';

import ProfilePhoto from '../ProfilePhoto';

const CoverStyled = styled.div`
  width: 100%;
  padding: 1.6em;
  border-radius: 15px;
  background-color: hsl(246, 80%, 60%);
`;

const TextCover = styled.p`
  margin-top: 2.6rem;
  margin-bottom: 0.2rem;
  color: hsl(236, 100%, 87%);
  font-size: 0.8em;
`;

const NameCover = styled.h1`
  font-weight: 300;
`;

function Cover() {
  return (
    <CoverStyled>
      <ProfilePhoto />
      <TextCover>Report for :</TextCover>
      <NameCover>Jeremy Robson</NameCover>
    </CoverStyled>
  );
}

export default Cover;

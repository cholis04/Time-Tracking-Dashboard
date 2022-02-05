import React from 'react';

import styled from 'styled-components';

const ButtonOptStyled = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  &:hover > svg > path {
    fill: white;
  }
`;

function ButtonOptions() {
  return (
    <ButtonOptStyled title='More Options'>
      <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
          fill='#BBC0FF'
          fillRule='evenodd'
        />
      </svg>
    </ButtonOptStyled>
  );
}

export default ButtonOptions;
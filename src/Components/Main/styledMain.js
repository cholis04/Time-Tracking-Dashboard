import styled from 'styled-components';

export const Box = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1110px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

export const Item = styled.div`
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor || 'hsl(235, 46%, 20%)'};
`;

export const ItemHead = styled(Item)`
  grid-row: span 2;
`;

export const Content = styled.div`
  padding: 1.5em;
  height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: hsl(235, 46%, 20%);
`;

export const HeadContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentTitle = styled.h2`
  font-size: 1em;
  font-weight: 400;
`;

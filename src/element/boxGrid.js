import styled from 'styled-components';

export const Box = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 375px;
  max-width: 1110px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6em;

  @media only screen and (max-width: 980px) {
    padding: 1.6em;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor || 'hsl(235, 46%, 20%)'};
`;

export const ItemHead = styled(Item)`
  grid-row: span 2;
  display: grid;
  grid-template-rows: 1fr 160px;
  @media only screen and (max-width: 680px) {
    grid-template-rows: 1fr auto;
  }
`;

export const Content = styled.div`
  padding: 1.6em;
  min-height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: hsl(235, 46%, 20%);
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: hsl(235, 45%, 31%);
  }
`;

export const HeadContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentTitle = styled.h2`
  font-size: 1em;
  font-weight: 500;
`;

export const Info = styled.div`
  margin-top: 1.4rem;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 680px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
  }
`;

export const TextInfo = styled.p`
  margin-bottom: ${(props) => (props.heading ? '0.4rem' : '0')};
  font-size: ${(props) => (props.heading ? '3em' : '0.8em')};
  font-weight: ${(props) => (props.heading ? '300' : '500')};
  color: ${(props) => (props.heading ? 'white' : 'hsl(236, 100%, 87%)')};

  @media only screen and (max-width: 680px) {
    font-size: ${(props) => (props.heading ? '1.8em' : '0.7em')};
    margin-bottom: 0;
  }
`;

export const SelectForm = styled.form`
  padding: 1.6em;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (max-width: 680px) {
    flex-direction: row;
  }
`;

export const Label = styled.label`
  width: auto;
`;

export const LabelText = styled.span`
  font-size: 1em;
  color: hsl(235, 45%, 61%);
  transition: all 0.2s ease-in;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
`;

export const InputRadio = styled.input.attrs({ type: 'radio' })`
  display: none;
  &:checked + ${LabelText} {
    color: white;
  }

  &:disabled + ${LabelText} {
    cursor: wait;
  }
  &[disabled]:not(:checked) + ${LabelText} {
    color: rgba(255, 255, 255, 0.2);
    text-decoration: line-through;
  }
`;

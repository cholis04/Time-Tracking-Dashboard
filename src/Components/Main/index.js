import React from 'react';

import {
  Box,
  Content,
  ContentTitle,
  Cover,
  HeadContent,
  Info,
  InputRadio,
  Item,
  ItemHead,
  Label,
  LabelText,
  NameCover,
  SelectForm,
  TextCover,
  TextInfo,
} from './styledMain';

import Thumbnail from '../Thumbnail';
import ButtonOptions from '../ButtonOptions';
import ProfilePhoto from '../ProfilePhoto';

function Main() {
  return (
    <Box>
      <ItemHead>
        <Cover>
          <ProfilePhoto />
          <TextCover>Report for :</TextCover>
          <NameCover>Jeremy Robson</NameCover>
        </Cover>
        <SelectForm name='select-time'>
          <Label htmlFor='daily'>
            <InputRadio name='time' id='daily' />
            <LabelText>Daily</LabelText>
          </Label>
          <Label htmlFor='weekly'>
            <InputRadio name='time' id='weekly' defaultChecked />
            <LabelText>Weekly</LabelText>
          </Label>
          <Label htmlFor='monthly'>
            <InputRadio name='time' id='monthly' />
            <LabelText>Monthly</LabelText>
          </Label>
        </SelectForm>
      </ItemHead>
      <Item backgroundColor='hsl(15, 100%, 70%)'>
        <Thumbnail src='icon-work' />
        <Content>
          <HeadContent>
            <ContentTitle>Work</ContentTitle>
            <ButtonOptions />
          </HeadContent>
          <Info>
            <TextInfo heading={true}>5hrs</TextInfo>
            <TextInfo>Last Day - 7hrs</TextInfo>
          </Info>
        </Content>
      </Item>
      <Item backgroundColor='hsl(195, 74%, 62%)'>
        <Thumbnail src='icon-play' />
        <Content>
          <HeadContent>
            <ContentTitle>Play</ContentTitle>
            <ButtonOptions />
          </HeadContent>
          <Info>
            <TextInfo heading={true}>1hrs</TextInfo>
            <TextInfo>Last Day - 2hrs</TextInfo>
          </Info>
        </Content>
      </Item>
      <Item backgroundColor='hsl(348, 100%, 68%)'>
        <Thumbnail src='icon-study' />
        <Content>
          <HeadContent>
            <ContentTitle>Study</ContentTitle>
            <ButtonOptions />
          </HeadContent>
          <Info>
            <TextInfo heading={true}>0hrs</TextInfo>
            <TextInfo>Last Day - 1hrs</TextInfo>
          </Info>
        </Content>
      </Item>
      <Item backgroundColor='hsl(145, 58%, 55%)'>
        <Thumbnail src='icon-exercise' />
        <Content>
          <HeadContent>
            <ContentTitle>Exercise</ContentTitle>
            <ButtonOptions />
          </HeadContent>
          <Info>
            <TextInfo heading={true}>1hrs</TextInfo>
            <TextInfo>Last Day - 1hrs</TextInfo>
          </Info>
        </Content>
      </Item>
      <Item backgroundColor='hsl(264, 64%, 52%)'>
        <Thumbnail src='icon-social' />
        <Content>
          <HeadContent>
            <ContentTitle>Social</ContentTitle>
            <ButtonOptions />
          </HeadContent>
          <Info>
            <TextInfo heading={true}>1hrs</TextInfo>
            <TextInfo>Last Day - 3hrs</TextInfo>
          </Info>
        </Content>
      </Item>
      <Item backgroundColor='hsl(43, 84%, 65%)'>
        <Thumbnail src='icon-self-care' />
        <Content>
          <HeadContent>
            <ContentTitle>Self Care</ContentTitle>
            <ButtonOptions />
          </HeadContent>
          <Info>
            <TextInfo heading={true}>0hrs</TextInfo>
            <TextInfo>Last Day - 1hrs</TextInfo>
          </Info>
        </Content>
      </Item>
    </Box>
  );
}

export default Main;

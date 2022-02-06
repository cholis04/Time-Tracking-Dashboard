import React from 'react';

import {
  Content,
  HeadContent,
  Item,
  ContentTitle,
  Info,
  TextInfo,
} from '../../element/boxGrid';

import ButtonOptions from '../ButtonOptions';
import Thumbnail from '../Thumbnail';

function ItemList({ activity, time }) {
  const { color, icon, title, timeframes } = activity;

  const selectTime = (time) => {
    switch (time) {
      case 'daily':
        return 'Day';
      case 'weekly':
        return 'Week';
      case 'monthly':
        return 'Month';
      default:
        return 'Day';
    }
  };

  return (
    <Item backgroundColor={color}>
      <Thumbnail src={icon} />
      <Content>
        <HeadContent>
          <ContentTitle>{title}</ContentTitle>
          <ButtonOptions />
        </HeadContent>
        <Info>
          <TextInfo heading={true} />
          {timeframes[time].current}hrs
          <TextInfo>
            Last {selectTime(time)} - {timeframes[time].previous}hrs
          </TextInfo>
        </Info>
      </Content>
    </Item>
  );
}

export default ItemList;

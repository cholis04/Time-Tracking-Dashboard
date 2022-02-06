import React, { useEffect, useRef } from 'react';

import { useCountUp } from 'react-countup';

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
  const countUpRef = useRef(null);
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

  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: timeframes[time].current,
    suffix: 'hrs',
    duration: 1.5,
    useEasing: true,
  });

  useEffect(() => {
    start();
  }, [start, time]);

  return (
    <Item backgroundColor={color}>
      <Thumbnail src={icon} />
      <Content>
        <HeadContent>
          <ContentTitle>{title}</ContentTitle>
          <ButtonOptions />
        </HeadContent>
        <Info>
          <TextInfo heading={true} ref={countUpRef} />
          <TextInfo>
            Last {selectTime(time)} - {timeframes[time].previous}hrs
          </TextInfo>
        </Info>
      </Content>
    </Item>
  );
}

export default ItemList;

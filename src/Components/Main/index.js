import React, { useState, useEffect } from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import {
  Box,
  InputRadio,
  ItemHead,
  Label,
  LabelText,
  SelectForm,
} from '../../element/boxGrid';

import ItemList from '../Item';
import Cover from '../Cover';

function Main() {
  const [time, setTime] = useState('weekly');
  const [disabled, setDisabled] = useState(true);

  const staticQuery = useStaticQuery(graphql`
    query TimeFrames {
      allDataJson {
        edges {
          node {
            color
            icon
            title
            timeframes {
              daily {
                current
                previous
              }
              monthly {
                current
                previous
              }
              weekly {
                current
                previous
              }
            }
          }
        }
      }
    }
  `);

  const dataActivities = staticQuery.allDataJson.edges;

  useEffect(() => {
    const loading = setTimeout(() => {
      setDisabled(false);
    }, 1500);
    return () => clearTimeout(loading);
  }, [time]);

  const handleChange = (e) => {
    setTime(e.target.value);
    setDisabled(true);
  };

  return (
    <Box>
      <ItemHead>
        <Cover />
        <SelectForm name='select-time' aria-busy={disabled}>
          <Label htmlFor='daily'>
            <InputRadio
              name='time'
              id='daily'
              onChange={handleChange}
              value='daily'
              disabled={disabled}
            />
            <LabelText>Daily</LabelText>
          </Label>
          <Label htmlFor='weekly'>
            <InputRadio
              name='time'
              id='weekly'
              defaultChecked
              onChange={handleChange}
              value='weekly'
              disabled={disabled}
            />
            <LabelText>Weekly</LabelText>
          </Label>
          <Label htmlFor='monthly'>
            <InputRadio
              name='time'
              id='monthly'
              onChange={handleChange}
              value='monthly'
              disabled={disabled}
            />
            <LabelText>Monthly</LabelText>
          </Label>
        </SelectForm>
      </ItemHead>

      {dataActivities.map((activity, index) => {
        return <ItemList activity={activity.node} key={index} time={time} />;
      })}
    </Box>
  );
}

export default Main;

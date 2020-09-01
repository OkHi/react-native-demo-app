import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {Container as Parent} from '../components/Common';

const values = [
  'Be open',
  'Grow together',
  'Go lean',
  'Enjoy your journey',
  'Be bold',
];

export const LoaderScreen = () => {
  const getValue = () => {
    const random = Math.floor(Math.random() * values.length);
    return values[random];
  };

  return (
    <Container>
      <ActivityIndicator color="#0097A7" />
      <Text>{getValue()}</Text>
    </Container>
  );
};

const Container = styled(Parent)`
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 16px;
  margin-top: 15px;
`;

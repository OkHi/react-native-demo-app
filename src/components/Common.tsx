import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const FullButton = (props: {label: string; onPress: () => any}) => {
  const Button = styled.View`
    background-color: red;
    align-items: center;
    justify-content: center;
    height: 45px;
    background-color: #0097a7;
  `;

  const ButtonText = styled.Text`
    color: white;
    font-weight: bold;
  `;

  return (
    <TouchableNativeFeedback>
      <Button>
        <ButtonText>{props.label}</ButtonText>
      </Button>
    </TouchableNativeFeedback>
  );
};

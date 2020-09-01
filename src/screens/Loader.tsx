import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import {Container as Parent} from '../components/Common';
import Repo from '../services/Repo';
import {RootStackParamList} from '../routes';
import {resetNavigation} from '../util';

const values = [
  'Be open',
  'Grow together',
  'Go lean',
  'Enjoy your journey',
  'Be bold',
];

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'LoaderScreen'>;
};

export const LoaderScreen = (props: Props) => {
  const init = () => {
    const timer = setTimeout(() => {
      Repo.getUser()
        .then((user) => {
          if (!user) {
            resetNavigation('CreateAddressScreen', props.navigation);
          } else {
            resetNavigation('HomeScreen', props.navigation, user);
          }
        })
        .catch(() => resetNavigation('CreateAddressScreen', props.navigation));
      clearTimeout(timer);
    }, 1000);
  };

  useEffect(init, []);

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

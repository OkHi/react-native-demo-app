import React from 'react';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  connectActionSheet,
  ActionSheetProps,
} from '@expo/react-native-action-sheet';
import {Container, FullButton} from '../components/Common';
import {AddressItem} from '../components/AddressItem';

const Home = (props: ActionSheetProps) => {
  const handleOnMorePres = () => {
    const options = [
      'Start Verification',
      'Copy link',
      'Share',
      'Remove Address',
      'Cancel',
    ];
    const destructiveButtonIndex = 3;
    const cancelButtonIndex = 4;
    props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
        icons: [
          <Icon name="check" size={26} />,
          <Icon name="content-copy" size={26} />,
          <Icon name="share" size={26} />,
          <Icon name="delete" size={26} color="#e57373" />,
        ],
      },
      () => {
        // Do something here depending on the button index selected
      },
    );
  };

  const handleOnAddressCreate = () => {};
  return (
    <Container>
      <Container>
        <Title>My OkHi</Title>
        <AddressItem onMorePress={handleOnMorePres} />
      </Container>
      <FullButton label="CREATE AN ADDRESS" onPress={handleOnAddressCreate} />
    </Container>
  );
};

export const HomeScreen = connectActionSheet(Home);

const Title = styled.Text`
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  margin: 15px;
  font-weight: bold;
  opacity: 0.8;
`;

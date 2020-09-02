import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Container, FullButton} from '../components/Common';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  connectActionSheet,
  ActionSheetProps,
} from '@expo/react-native-action-sheet';

const Home = (props: ActionSheetProps) => {
  const handleOnAddressCreate = () => {};

  const handleOnMore = () => {
    // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
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

  return (
    <Container>
      <Container>
        <Title>My OkHi</Title>
        <AddressContainer>
          <AddressSection>
            <AddressAvatar />
          </AddressSection>
          <AddressSection main>
            <AddressTitleText>Corner View Apartments</AddressTitleText>
            <AddressTitleSubtitle>Mubiru Road</AddressTitleSubtitle>
            <AddressTextDivider />
            <AddressTitleSubtitle color="#0097a7">
              Verification in progress
            </AddressTitleSubtitle>
          </AddressSection>
          <AddressSection>
            <TouchableOpacity onPress={handleOnMore}>
              <Icon name="more-vert" size={22} />
            </TouchableOpacity>
          </AddressSection>
        </AddressContainer>
      </Container>
      <FullButton label="CREATE AN ADDRESS" onPress={handleOnAddressCreate} />
    </Container>
  );
};

export const HomeScreen = connectActionSheet(Home);

const AddressAvatar = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #757575;
`;

const Title = styled.Text`
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  margin: 15px;
  font-weight: bold;
  opacity: 0.8;
`;

const AddressContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 26px;
`;

const AddressSection = styled.View<{main?: boolean}>`
  flex: ${(props) => (props.main ? 1 : 0.5)};
  align-items: ${(props) => (props.main ? 'flex-start' : 'center')};
  justify-content: ${(props) => (props.main ? 'flex-start' : 'center')};
`;

const AddressTitleText = styled.Text`
  font-size: 16px;
`;

const AddressTitleSubtitle = styled.Text<{color?: string}>`
  opacity: 0.7;
  color: ${(props) => props.color || '#212121'};
`;

const AddressTextDivider = styled.View`
  margin: 4px 0;
`;

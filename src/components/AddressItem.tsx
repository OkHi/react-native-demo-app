import React from 'react';
import styled from 'styled-components/native';
// import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const AddressItem = (props: {onMorePress: () => any}) => {
  return (
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
        <TouchableOpacity onPress={props.onMorePress}>
          <Icon name="more-vert" size={22} />
        </TouchableOpacity>
      </AddressSection>
    </AddressContainer>
  );
};

const TouchableOpacity = styled.TouchableOpacity`
  padding: 5px;
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

const AddressAvatar = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #757575;
`;

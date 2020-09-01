import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import {Button} from 'react-native';
import {Container} from '../components/Common';
import {RootStackParamList} from '../routes';
import {resetNavigation} from '../util';
import Repo from '../services/Repo';

type FormErrorType = 'firstName' | 'lastName' | 'phone';

type FormErrorTypes = Array<FormErrorType>;

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'CreateAddressScreen'>;
};

export const CreateAddressScreen = (props: Props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<FormErrorTypes>();

  const hasError = (type: FormErrorType) => {
    return error?.includes(type) || false;
  };

  const handleOnFormSubmit = () => {
    Repo.saveUser({firstName, lastName, phone});
    resetNavigation('HomeScreen', props.navigation, {
      firstName,
      lastName,
      phone,
    });
  };

  const handleOnPress = () => {
    setError([]);

    const errors: FormErrorTypes = [];

    if (!firstName) {
      errors.push('firstName');
    }

    if (!lastName) {
      errors.push('lastName');
    }

    if (!phone || !phone.startsWith('+') || phone.length < 13) {
      errors.push('phone');
    }

    if (errors.length) {
      setError(errors);
    } else {
      handleOnFormSubmit();
    }
  };

  const renderHint = (type: FormErrorType) => {
    if (error?.includes(type) && type === 'firstName') {
      return <Hint>Please provide a first name</Hint>;
    }

    if (error?.includes(type) && type === 'lastName') {
      return <Hint>Please provide a first name</Hint>;
    }

    if (error?.includes(type) && type === 'phone') {
      return (
        <Hint>Please include your country code prefix e.g +254712345678</Hint>
      );
    }

    if (type === 'phone') {
      return (
        <Hint noError>
          Please include your country code prefix e.g +254712345678
        </Hint>
      );
    }
  };

  return (
    <Container>
      <Form>
        <Title>Create your OkHi Address</Title>
        <FormGroup>
          <Input
            placeholder="First name*"
            onChangeText={setFirstName}
            value={firstName}
            error={hasError('firstName')}
          />
          {renderHint('firstName')}
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Last name*"
            onChangeText={setLastName}
            value={lastName}
            error={hasError('lastName')}
          />
          {renderHint('lastName')}
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Phone number*"
            onChangeText={setPhone}
            value={phone}
            keyboardType="phone-pad"
            error={hasError('phone')}
          />
          {renderHint('phone')}
        </FormGroup>
        <Button
          title="CREATE ADDRESS"
          color="#0097A7"
          onPress={handleOnPress}
        />
      </Form>
    </Container>
  );
};

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  opacity: 0.9;
`;

const Hint = styled.Text<{noError?: boolean}>`
  opacity: 0.5;
  font-size: 12px;
  color: ${(props) => (props.noError ? '#212121' : '#b71c1c')};
`;

const Form = styled.View`
  border: 2px;
  padding: 15px;
  margin: 15px;
  border-radius: 8px;
  background-color: white;
  border-color: #eeeeee;
  padding-bottom: 30px;
`;

const FormGroup = styled.View`
  margin-bottom: 25px;
`;

type TextInputProps = {
  error: boolean;
};

const Input = styled.TextInput<TextInputProps>`
  border-width: 2px;
  height: 48px;
  border-radius: 8px;
  border-color: ${(props) => (props.error ? '#ef9a9a' : '#bdbdbd')};
  padding: 0 15px;
`;

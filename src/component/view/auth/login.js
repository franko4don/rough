import React from 'react';
import { View, StatusBar } from 'react-native';

import { TextView, Container, SubmitTextViewActive, ButtonActive, FlexRowView, SubmitTextView, GetMoreText, Button, ForgotPassword, ForgotPasswordText } from './styles';
import { TextInputView } from '../../widget/textInput/styles';
// import { Button } from '../../widget/button/styles';
import CheckBox from '@react-native-community/checkbox';
import Plans from '../../widget/plans';
import dataPlan from './../../../data/plan.json';

const login = ({onEmailChange, onPasswordChange, email, disabled, password, rememberMe, onCheckRememberMe}) => {
  return (
    <Container>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
      <TextView>Log in</TextView>
      <TextInputView value={email} onChangeText={onEmailChange} placeholder={'Email address'} />
      <TextInputView value={password} secureTextEntry onChangeText={onPasswordChange} placeholder={'Password'}/>
      {disabled ?
      <Button>
        <SubmitTextView>Submit</SubmitTextView>
      </Button>
      :
      <ButtonActive>
        <SubmitTextViewActive>Submit</SubmitTextViewActive>
      </ButtonActive>
      }

      <FlexRowView>
        <CheckBox onValueChange={onCheckRememberMe} value={rememberMe} />
        <TextView>Remember me</TextView>
      </FlexRowView>
      <ForgotPassword>
        <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
      </ForgotPassword>
      <GetMoreText>
        Get more out of WeTransfer
      </GetMoreText>

      {dataPlan.map((item, index) => {
        return (
          <Plans
            key={index}
            name={item.name}
            cost={item.cost}
            free={item.free}
            buttonText={item.buttonText}
            outlines={item.outlines}
          />
        )
      })}
      

    </Container>
  );
};

export default login;

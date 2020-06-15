import styled from 'styled-components/native';
import Text from '../../widget/text';
import {View, ScrollView, TouchableOpacity} from 'react-native'
import { Button as MButton } from '../../widget/button/styles';

export const TextView = styled(Text)`
    font-size: 18px;
    line-height: 24px;
    margin-left: 0;
    margin-bottom: 20px;
`;

export const Container = styled(ScrollView)`
    padding: 20px;
    flex-grow: 1;
    background-color: #fff;
`;

export const Button = styled(MButton)`

`
export const ButtonActive = styled(MButton)`
    background-color: #409fff;
`
export const SubmitTextView = styled(TextView)`
    color: white;
    text-align: center;
    font-size: 15px;
    margin-bottom: 0;
`;

export const SubmitTextViewActive = styled(TextView)`
    color: white;
    text-align: center;
    font-size: 15px;
    margin-bottom: 0;
    color: #fff;
`;

export const FlexRowView = styled(View)`
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const ForgotPassword = styled(TouchableOpacity)`
    border-bottom-width: 1px;
    border-bottom-color: black;
    align-self: flex-start;
`;

export const ForgotPasswordText = styled(Text)`
   font-size: 14px;
`;

export const GetMoreText = styled(Text)`
    font-size: 35px;
    margin: 15px;
    color: black;
    text-align: center;
`;
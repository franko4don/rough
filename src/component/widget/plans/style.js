import styled from 'styled-components/native';
import { Button } from '../button/styles';

export const FlexRowView = styled.View`
    flex-direction: row;
    margin-bottom: 5px;
    margin-top: 10px;
`;

export const PlanView = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-width: 1px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    border-color: #e8ebed;
`;


export const PlanButton = styled(Button)`
    margin-top: 30px;
    background-color: #fff;
    border-color: #409fff;
    border-width: 1px;
`;

export const PlanButtonActive = styled(PlanButton)`
    background-color: #409fff;
`;

export const PlanText = styled.Text`
    font-size: 24px;
    line-height: 26px;
`;

export const PlanButtonText = styled.Text`
    font-size: 16px;
    text-align: center;
    color: #409fff;
`;

export const PlanButtonTextActive = styled(PlanButtonText)`
    color: #fff;
`;

export const PlanCost = styled.Text`
    font-size: 18px;
    line-height: 19px;
`;

import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from '../button/styles';
import {PlanView, PlanText, PlanCost, PlanButtonText, FlexRowView, PlanButton, PlanButtonActive, PlanButtonTextActive} from './style';

const Plans = ({name, cost, free, buttonText, outlines}) => {
  return (
      <PlanView>
          <PlanText >{name}</PlanText >
          <PlanCost>{cost}</PlanCost>
          {outlines.map((item, index) => 
            <FlexRowView key={index}>
                <View>
                    <Icon name={item.check ? 'check' : 'close'} color={'gray'} size={20} />
                </View>
                <View style={{justifyContent: 'center', marginLeft: 15}}>
                    <Text>{item.description}</Text>
                </View>
            </FlexRowView>
          )}
          
          {
          free ? 
            <PlanButton>
                <PlanButtonText>{buttonText}</PlanButtonText>
            </PlanButton>
                :
            <PlanButtonActive>
                <PlanButtonTextActive>{buttonText}</PlanButtonTextActive>
            </PlanButtonActive>
        }
      </PlanView>
  );
};

export default Plans;

import React from 'react';
import {isEmpty} from 'lodash';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../auth/login';

import HomeScreen from '../home';
import { Text, Image } from 'react-native';

const Stack = createStackNavigator();

const Navigation = (user) => {
  return (
    <Stack.Navigator>
      {isEmpty(user)  ? (
        <Stack.Screen 
          name="LogIn" 
          component={LoginScreen} 
          options={{
            headerTitleAlign: 'center',
            headerStyle: {elevation: 0.5},
            headerTitle: props => <Image
              source={require('./../../assets/logo.png')}
              style={{width: 55, height: 40}}
              resizeMode={'contain'}
            />,
            headerRight: () => (
              <Text style={{paddingRight: 20}}>Login</Text>
            ),
          }}
        />
      ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>

  );
};

export default Navigation;

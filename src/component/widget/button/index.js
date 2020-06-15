import React from 'react';

import {Button as TouchableOpacity} from './styles';

const Button = (props) => {
  return <TouchableOpacity {...props}>
      {props.children}
  </TouchableOpacity>;
};

export default Button;

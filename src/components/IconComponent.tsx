import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  name: string;
  size?: number;
  color?: string;
};

const IconComponent = ({
  name = 'ab-testing',
  size = 100,
  color = 'black',
}: Props) => {
  return <Icon name={name} size={size} color={color} />;
};

export default IconComponent;

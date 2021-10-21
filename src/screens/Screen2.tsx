import React from 'react';
import {Text, View} from 'react-native';
import Icon from './../components/IconComponent';

const Screen2 = () => {
  return (
    <View>
      <Text>Hello from Screen 2</Text>
      <Text>
        <Icon name="plus-thick" color="black" />
      </Text>
    </View>
  );
};

export default Screen2;

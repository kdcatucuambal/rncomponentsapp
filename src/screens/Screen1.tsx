import React from 'react';
import {Button, Text, View} from 'react-native';
import Icon from '../components/IconComponent';
import {StackScreenProps} from '@react-navigation/stack';
interface Props extends StackScreenProps<any, any> {}
const Screen1 = ({navigation: router}: Props) => {
  return (
    <View>
      <Text>Hello from Screen 1</Text>
      <Text>
        <Icon name="allergy" size={40} color="blue"></Icon>
      </Text>
      <Button title="Navigate" onPress={() => router.navigate('Screen2')} />
    </View>
  );
};

export default Screen1;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import HomeScreen from '../screens/HomeScreen';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefScreen from '../screens/PullToRefScreen';
import SectionListScreen from '../screens/SectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';

//Se establecen lás paginas existentes y el tipo de dato que se
//va enviar como parametro, si no se envia nada se coloca undefinded
export type RootStackParams = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchScreen: undefined;
  TextInputScreen: undefined;
  PullToRefScreen: undefined;
  SectionListScreen: undefined;
  ModalScreen: undefined;
  InfiniteScrollScreen: undefined;
  Screen1: undefined;
  AlertScreen: undefined;
  Screen2: {id: string; name: string};
};

const Stack = createStackNavigator<RootStackParams>();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false, cardStyle: {backgroundColor: 'white'}}}
      />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen
        name="TextInputScreen"
        component={TextInputScreen}
        options={{cardStyle: {backgroundColor: 'white'}}}
      />
      <Stack.Screen
        name="SwitchScreen"
        component={SwitchScreen}
        options={{cardStyle: {backgroundColor: 'white'}}}
      />
      <Stack.Screen name="PullToRefScreen" component={PullToRefScreen} />
      <Stack.Screen
        name="SectionListScreen"
        component={SectionListScreen}
        options={{cardStyle: {backgroundColor: 'white'}}}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
        options={{
          cardStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

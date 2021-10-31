import React, {useContext} from 'react';
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
import SlidesScreen from '../screens/SlidesScreen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

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
  ChangeThemeScreen: undefined;
  InfiniteScrollScreen: undefined;
  SlideScreen: undefined;
  Screen1: undefined;
  AlertScreen: undefined;
  Screen2: {id: string; name: string};
};

const Stack = createStackNavigator<RootStackParams>();
const StackNavigator = () => {
  const {setLightTheme, setDarkTheme, theme} = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerTintColor:"white"}}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            cardStyle: {
              // backgroundColor: "white"
            },
          }}
        />
        <Stack.Screen
          name="Animation101Screen"
          component={Animation101Screen}
        />
        <Stack.Screen
          name="Animation102Screen"
          component={Animation102Screen}
        />
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
        <Stack.Screen
          name="SlideScreen"
          component={SlidesScreen}
          options={{
            cardStyle: {
              backgroundColor: 'white',
            },
          }}
        />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

import 'react-native-gesture-handler';
import React from 'react';
import StackNavigator from './src/navigator/StackNavigator';
import {
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

const customThemes: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    // primary: string;
    // background: 'black',
    // card: string;
    // text: "white",
    // border: string;
    // notification: string;
  },
};

const App = () => {
  return (
    <AppState>
        <StackNavigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;

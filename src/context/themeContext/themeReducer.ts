import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_dark_theme'} | {type: 'set_light_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#2159C2',
    background: 'white',
    card: '#2159C2',
    text: 'black',
    border: 'orange',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: 'white',
    background: 'black',
    card: 'black',
    text: 'white',
    border: 'orange',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_dark_theme':
      return {...darkTheme};
    case 'set_light_theme':
      return {...lightTheme};
    default:
      return {...state};
  }
};

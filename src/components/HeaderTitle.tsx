import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  title: string;
  size?: number;
}

const HeaderTitle = ({title, size}: Props) => {
  const {top} = useSafeAreaInsets();
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{marginTop: top, marginBottom: 20}}>
      <Text
        style={{
          ...styles.title,
          color: theme.colors.text,
          fontSize: size ? size : 35,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderTitle;
